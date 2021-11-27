export declare class BarbaError extends Error {
    error: Error;
    label: string;
    constructor(error: Error, label?: string, ...params: any[]);
}
