
# Gemini CLI Adapter for Browser MCP

This adapter acts as a bridge, allowing the Gemini CLI to communicate with the Browser MCP server and control your browser.

## Prerequisites

- Node.js and npm must be installed.
- The main Browser MCP server must be built in the root of the project. If you haven't done so, run `npm install` and `npm run build` from the project root first.

## Setup

From within this directory (`packages/gemini-cli-adapter`), run the following command to install dependencies and build the adapter:

```bash
npm install && npm run build
```

## Running the Adapter

To start the adapter, run the following command from this directory:

```bash
node dist/index.js
```

This will also start the main Browser MCP server in the background.

## Usage with Gemini CLI

To use this adapter with the Gemini CLI, use the `--tool-command` flag and provide the absolute path to the built adapter script:

```bash
gemini-cli --tool-command "node /Volumes/External/projects/gemini-mcp/packages/gemini-cli-adapter/dist/index.js" "Your browser automation prompt here"
```

For example:

```bash
gemini-cli --tool-command "node /Volumes/External/projects/gemini-mcp/packages/gemini-cli-adapter/dist/index.js" "Navigate to wikipedia.org, search for 'Large Language Model', and then take a screenshot."
```
