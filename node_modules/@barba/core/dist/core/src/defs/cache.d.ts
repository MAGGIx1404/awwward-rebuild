/**
 * @module typings/core
 */
export interface ICacheData {
    action?: CacheAction;
    request?: CacheRequest;
}
export declare type CacheRequest = Promise<string | void>;
export declare type CacheAction = 'init' | 'enter' | 'click' | 'prefetch';
