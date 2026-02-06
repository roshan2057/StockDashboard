export interface FetchGetOptions {
    params?: Record<string, string | number>;
    query?: Record<string, string | number>;
    headers?: Record<string, string>;
}
export declare const fetchGet: <T>(url: string, options?: FetchGetOptions) => Promise<T>;
//# sourceMappingURL=fetchGet.d.ts.map