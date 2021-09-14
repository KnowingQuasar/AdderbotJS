abstract class IEvent {
    name: string;
    once: boolean;
    execute: (...args: any) => Promise<void>;
}

export {
    IEvent
}