import { spawn, ChildProcess } from 'child_process';
import WebSocket from 'ws';
import path from 'path';

// The server script is located in the root dist folder
const SERVER_SCRIPT_PATH = path.resolve(__dirname, '../../../dist/index.js');
const WEBSOCKET_PORT = 9002; // Using the port from the inspector script as a default
const MAX_RETRIES = 15;
const RETRY_DELAY_MS = 500;

let serverProcess: ChildProcess | null = null;

/**
 * Spawns the MCP server as a child process.
 */
function startServer(): ChildProcess {
    const server = spawn('node', [SERVER_SCRIPT_PATH], {
        stdio: ['pipe', 'pipe', 'pipe'], // stdin, stdout, stderr
    });

    // Log server output for debugging purposes. Use stderr to not interfere with MCP transport.
    server.stdout?.on('data', (data) => {
        console.error(`[MCP Server STDOUT]: ${data.toString().trim()}`);
    });

    server.stderr?.on('data', (data) => {
        console.error(`[MCP Server STDERR]: ${data.toString().trim()}`);
    });

    server.on('close', (code) => {
        console.error(`[Adapter] MCP Server exited with code ${code}`);
        process.exit(code ?? 1);
    });

    serverProcess = server;
    return server;
}

/**
 * Attempts to connect to the WebSocket server with retries.
 */
async function connectToWebSocket(): Promise<WebSocket> {
    for (let i = 0; i < MAX_RETRIES; i++) {
        try {
            const ws = new WebSocket(`ws://localhost:${WEBSOCKET_PORT}`);
            // Wait for the connection to open
            await new Promise((resolve, reject) => {
                ws.on('open', resolve);
                ws.on('error', reject);
            });
            console.error('[Adapter] Successfully connected to MCP Server WebSocket.');
            return ws;
        } catch (error) {
            console.error(`[Adapter] WebSocket connection attempt ${i + 1}/${MAX_RETRIES} failed. Retrying in ${RETRY_DELAY_MS}ms...`);
            await new Promise(resolve => setTimeout(resolve, RETRY_DELAY_MS));
        }
    }
    throw new Error('Failed to connect to the WebSocket server after multiple retries.');
}

/**
 * Main function to orchestrate starting the server and connecting the client.
 */
async function main() {
    console.error('[Adapter] Starting MCP Server...');
    startServer();

    try {
        const ws = await connectToWebSocket();

        // Bridge stdin -> WebSocket
        process.stdin.on('data', (data) => {
            if (ws.readyState === WebSocket.OPEN) {
                ws.send(data);
            }
        });

        // Bridge WebSocket -> stdout
        ws.on('message', (data) => {
            process.stdout.write(data.toString());
        });

        ws.on('close', () => {
            console.error('[Adapter] WebSocket connection closed.');
            process.exit(0);
        });

        ws.on('error', (error) => {
            console.error('[Adapter] WebSocket error:', error);
            process.exit(1);
        });

    } catch (error) {
        console.error('[Adapter] Failed to initialize:', error);
        if (serverProcess) {
            serverProcess.kill();
        }
        process.exit(1);
    }
}

// Ensure the server process is killed when the adapter exits.
process.on('exit', () => {
    if (serverProcess && !serverProcess.killed) {
        console.error('[Adapter] Shutting down MCP Server...');
        serverProcess.kill();
    }
});

process.on('SIGINT', () => {
    process.exit(0);
});

main();