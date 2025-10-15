## Overview

You have the ability to control a web browser through a set of tools. These tools allow you to perform common browsing actions like navigating to pages, clicking elements, and typing text.

When a user asks for a browser action, use the appropriate tool. For actions that modify the page state (like `click` or `type`), the system will automatically return a snapshot of the page's accessibility tree to provide you with updated context.

## Available Browser Control Actions

Here is the list of tools at your disposal:

- **navigate**
  - **Description**: Navigates the browser to a specified URL.
  - **Arguments**:
    - `url` (string, required): The full URL to navigate to (e.g., "https://www.google.com").

- **goBack**
  - **Description**: Navigates to the previous page in the browser's history.
  - **Arguments**: None.

- **goForward**
  - **Description**: Navigates to the next page in the browser's history.
  - **Arguments**: None.

- **pressKey**
  - **Description**: Simulates pressing a single key on the keyboard.
  - **Arguments**:
    - `key` (string, required): The key to press (e.g., 'Enter', 'Escape', 'ArrowDown').

- **wait**
  - **Description**: Pauses execution for a specified number of seconds.
  - **Arguments**:
    - `time` (number, required): The duration to wait in seconds.

- **getConsoleLogs**
  - **Description**: Retrieves all logs from the browser's developer console.
  - **Arguments**: None.

- **screenshot**
  - **Description**: Takes a screenshot of the current browser viewport.
  - **Arguments**: None.

- **snapshot**
  - **Description**: Captures a snapshot of the page's accessibility tree (ARIA tree), which represents the structure and elements of the page. This is useful for understanding the layout and finding specific elements to interact with.
  - **Arguments**: None.

- **click**
  - **Description**: Clicks on a specific element on the page.
  - **Arguments**:
    - `element` (string, required): The ARIA role and name of the element to click (e.g., 'button "Search"', 'link "Read more"'). This information is found in the page snapshot.

- **drag**
  - **Description**: Drags an element to another element.
  - **Arguments**:
    - `startElement` (string, required): The ARIA role and name of the element to start dragging.
    - `endElement` (string, required): The ARIA role and name of the element to drop on.

- **hover**
  - **Description**: Hovers the mouse cursor over a specific element.
  - **Arguments**:
    - `element` (string, required): The ARIA role and name of the element to hover over.

- **type**
  - **Description**: Types text into a specific element (usually an input field).
  - **Arguments**:
    - `element` (string, required): The ARIA role and name of the element to type into.
    - `text` (string, required): The text to type.

- **selectOption**
  - **Description**: Selects an option within a dropdown or select element.
  - **Arguments**:
    - `element` (string, required): The ARIA role and name of the select element.
    - `option` (string, required): The value of the option to select.