
import { z } from 'zod';

// A generic base for tools
const ToolBase = z.object({
  description: z.string(),
  arguments: z.any(),
});

// Specific Tool Schemas
export const NavigateTool = ToolBase.extend({
  name: z.literal('navigate'),
  description: z.literal('Navigate to a URL'),
  arguments: z.object({ url: z.string() }),
});

export const GoBackTool = ToolBase.extend({
    name: z.literal('goBack'),
    description: z.literal('Go back to the previous page'),
    arguments: z.object({}),
});

export const GoForwardTool = ToolBase.extend({
    name: z.literal('goForward'),
    description: z.literal('Go forward to the next page'),
    arguments: z.object({}),
});

export const PressKeyTool = ToolBase.extend({
    name: z.literal('pressKey'),
    description: z.literal('Press a key'),
    arguments: z.object({ key: z.string() }),
});

export const WaitTool = ToolBase.extend({
    name: z.literal('wait'),
    description: z.literal('Wait for a specified amount of time'),
    arguments: z.object({ time: z.number() }),
});

export const GetConsoleLogsTool = ToolBase.extend({
    name: z.literal('getConsoleLogs'),
    description: z.literal('Get console logs from the browser'),
    arguments: z.object({}),
});

export const ScreenshotTool = ToolBase.extend({
    name: z.literal('screenshot'),
    description: z.literal('Take a screenshot of the current page'),
    arguments: z.object({}),
});

export const SnapshotTool = ToolBase.extend({
    name: z.literal('snapshot'),
    description: z.literal('Capture a snapshot of the accessibility tree'),
    arguments: z.object({}),
});

export const ClickTool = ToolBase.extend({
    name: z.literal('click'),
    description: z.literal('Click on an element'),
    arguments: z.object({ element: z.string() }),
});

export const DragTool = ToolBase.extend({
    name: z.literal('drag'),
    description: z.literal('Drag an element to another element'),
    arguments: z.object({ startElement: z.string(), endElement: z.string() }),
});

export const HoverTool = ToolBase.extend({
    name: z.literal('hover'),
    description: z.literal('Hover over an element'),
    arguments: z.object({ element: z.string() }),
});

export const TypeTool = ToolBase.extend({
    name: z.literal('type'),
    description: z.literal('Type text into an element'),
    arguments: z.object({ element: z.string(), text: z.string() }),
});

export const SelectOptionTool = ToolBase.extend({
    name: z.literal('selectOption'),
    description: z.literal('Select an option in a dropdown'),
    arguments: z.object({ element: z.string(), option: z.string() }),
});
