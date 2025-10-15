
export type MessagePayload<T, K extends keyof T> = T[K];
export type MessageType<T> = keyof T;
export type SocketMessageMap = {
    browser_navigate: { url: string };
    browser_go_back: {};
    browser_go_forward: {};
    browser_press_key: { key: string };
    browser_wait: { time: number };
    browser_get_console_logs: {};
    browser_screenshot: {};
    browser_snapshot: {};
    browser_click: { element: string };
    browser_drag: { startElement: string, endElement: string };
    browser_hover: { element: string };
    browser_type: { element: string, text: string };
    browser_select_option: { element: string, option: string };
    getUrl: undefined;
    getTitle: undefined;
};
