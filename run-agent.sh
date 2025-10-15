#!/bin/bash

if [ $# -ne 1 ]; then
    echo "Error: Please provide exactly one argument."
    echo "Usage: $0 <instructions_file>"
    exit 1 # Exit with an error code
fi

claude --verbose --allowedTools browsermcp --dangerously-skip-permissions -p "load @claude-browser-mcp.md and follow instructions in @$1. Begin automation and finish all" --output-format stream-json --include-partial-messages
