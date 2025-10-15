# Context for Browser Automation using BrowserMCP

This document provides instructions and context for using the `browsermcp` tool to control a web browser. Adhering to these guidelines will ensure efficient and accurate browser automation.

## Tool Invocation

To use the browser automation tool, it must be enabled via the `--allowed-mcp-server-names` flag in the `gemini` command-line interface. The server name is `browsermcp`.

**Example:**
```bash
gemini --allowed-mcp-server-names browsermcp -p "Navigate to google.com"
```

## Core Concept: The Page Snapshot

The primary mechanism for understanding the state of a web page is the **snapshot**. Most browser manipulation tools (`navigate`, `click`, `type`, etc.) will return a snapshot of the page's accessibility tree (ARIA tree) after the action is complete.

This snapshot is a YAML-formatted string that lists all interactable elements on the page. Each element is identified by its `role` and `name`.

**Example Snapshot Element:**
```yaml
- role: button
  name: "Search"
```

**CRITICAL:** When using a tool that requires an `element` argument (like `click` or `type`), you **MUST** use the exact `role` and `name` from the most recent snapshot. Construct the element identifier as a string: `'<role> "<name>"'`.

## Workflow

1.  **Initial Action:** Start with a `navigate` or `snapshot` command to get the initial state of the page.
2.  **Analyze Snapshot:** Review the returned snapshot to identify the target element for your next action.
3.  **Perform Action:** Use a tool like `click` or `type` with the precise element identifier from the snapshot.
4.  **Repeat:** Continue this cycle of analyzing the new snapshot and performing actions until the task is complete.

## Available Tools

The following tools are available for browser automation:

### Navigation

*   **`navigate`**: Navigates to a specified URL.
    *   **Arguments:** `url` (string, required)
    *   **Example Prompt:** "Navigate to https://www.wikipedia.org"
*   **`goBack`**: Navigates to the previous page in the browser history.
*   **`goForward`**: Navigates to the next page in the browser history.

### Interaction

*   **`snapshot`**: Captures a snapshot of the current page.
*   **`click`**: Clicks on a specific element.
    *   **Arguments:** `element` (string, required) - e.g., 'button "Log in"'
    *   **Example Prompt:** "Click the link "Read more"'
*   **`type`**: Types text into a specific element.
    *   **Arguments:**
        *   `element` (string, required) - e.g., 'textbox "Username"'
        *   `text` (string, required)
    *   **Example Prompt:** "In the textbox "Search query", type "Large Language Models"'
*   **`hover`**: Hovers the mouse over an element.
    *   **Arguments:** `element` (string, required)
*   **`selectOption`**: Selects an option within a dropdown element.
    *   **Arguments:**
        *   `element` (string, required) - e.g., 'combobox "Country"'
        *   `option` (string, required) - The value of the option to select.
*   **`drag`**: Drags an element to another element.
    *   **Arguments:**
        *   `startElement` (string, required)
        *   `endElement` (string, required)

### Other

*   **`pressKey`**: Simulates pressing a single key.
    *   **Arguments:** `key` (string, required) - e.g., 'Enter', 'Escape'
*   **`wait`**: Pauses for a specified number of seconds.
    *   **Arguments:** `time` (number, required)
*   **`getConsoleLogs`**: Retrieves logs from the browser's developer console.
*   **`screenshot`**: Takes a screenshot of the current browser viewport.
