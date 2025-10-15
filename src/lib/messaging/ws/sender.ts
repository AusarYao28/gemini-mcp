export function createSocketMessageSender<T>(ws: any) {
    return {
        sendSocketMessage: (type: keyof T, payload: any, options: any) => {
            return new Promise((resolve, reject) => {
                const id = Date.now().toString();
                const message = JSON.stringify({ type, payload, id });
                ws.send(message);

                const timeout = setTimeout(() => {
                    reject(new Error('Message timeout'));
                }, options?.timeoutMs || 5000);

                const onMessage = (data: any) => {
                    try {
                        const response = JSON.parse(data.toString());
                        if (response.id === id) {
                            clearTimeout(timeout);
                            ws.removeListener('message', onMessage);
                            if(response.error) {
                                reject(new Error(response.error));
                            } else {
                                resolve(response.payload);
                            }
                        }
                    } catch (e) {
                        // Ignore parse errors, it might be a message for another handler
                    }
                };
                ws.on('message', onMessage);
            });
        }
    };
}