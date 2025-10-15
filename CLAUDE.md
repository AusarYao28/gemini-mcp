# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Browser MCP is an MCP (Model Context Protocol) server that enables browser automation through AI applications. It consists of:

- **MCP Server**: TypeScript-based server that communicates with browser extensions via WebSocket
- **Tool System**: Modular browser automation tools (navigation, clicking, typing, screenshots, etc.)
- **Chrome Extension Integration**: Real-time communication with user's browser tab
- **CLI Adapter Package**: Additional package in `packages/gemini-cli-adapter/`

The server runs locally for privacy and performance, using the user's existing browser profile to avoid bot detection.

## Common Commands

### Development
```bash
# Build the project
npm run build

# Watch for changes and rebuild
npm run watch

# Type checking
npm run typecheck

# Run MCP inspector (debugging tool)
npm run inspector
```

### Running
```bash
# Run the built server
node dist/index.js

# Or use the binary directly
npx mcp-server-browsermcp
```

## Architecture

### Core Components

**Entry Point** (`src/index.ts`):
- CLI setup using commander
- Tool registration and server creation
- Uses `StdioServerTransport` for MCP communication

**Server Creation** (`src/server.ts`):
- `createServerWithTools()` function sets up MCP server with tools and resources
- WebSocket server for browser extension communication
- Request handlers for `ListTools`, `CallTool`, `ListResources`, `ReadResource`

**Context System** (`src/context.ts`):
- `Context` class manages WebSocket connection state
- Provides `sendSocketMessage()` for browser communication
- Enforces connection requirements with clear error messages

**WebSocket Management** (`src/ws.ts`):
- Creates WebSocket server on configurable port
- Handles port conflicts and cleanup

### Tool Architecture

**Tool Interface** (`src/tools/tool.ts`):
- `Tool` type with `schema` and `handle` function
- `ToolFactory` for tools that can operate in different modes
- Standardized result format with content and error handling

**Tool Categories**:
- **Common Tools** (`src/tools/common.ts`): Navigation, keyboard input, waiting
- **Custom Tools** (`src/tools/custom.ts`): Console logs, screenshots
- **Snapshot Tools** (`src/tools/snapshot.ts`): Page interaction with visual snapshots

**Tool Registration Pattern**:
```typescript
const snapshotTools: Tool[] = [
  common.navigate(true),  // Factory pattern with snapshot mode
  snapshot.click,         // Direct tool instances
  ...commonTools,
  ...customTools,
];
```

### Configuration System

The project uses path aliases (`@/*` maps to `./src/*`) and imports external configurations from `@repo/config/*`, indicating it was extracted from a larger monorepo.

### Package Structure

- `packages/gemini-cli-adapter/`: Additional CLI adapter package with its own build system
- Dependencies on external `@repo/*` and `@r2r/*` packages suggest monorepo heritage

## Key Dependencies

- `@modelcontextprotocol/sdk`: Core MCP protocol implementation
- `ws`: WebSocket server for browser communication  
- `zod`: Schema validation and type safety
- `commander`: CLI argument parsing
- `tsup`: Build tooling for TypeScript

## Development Notes

- The codebase imports from `@repo/*` paths that may not exist in standalone builds
- WebSocket communication is central to browser extension integration
- Tool system is designed for extensibility with factory patterns
- Error handling emphasizes user-friendly messages about connection requirements