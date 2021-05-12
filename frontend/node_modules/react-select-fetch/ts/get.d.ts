export declare const stringifyParams: (params: Record<string, any>) => string;
export declare const getPure: (fetchParam: typeof fetch, stringifyParamsParam: typeof stringifyParams, url: string, params: Record<string, any>) => Promise<any>;
export declare const get: (url: string, params: Record<string, any>) => Promise<any>;
