/**
 * @barba/core/modules/cache
 * <br><br>
 * ## Cache for storing URL / HTML.
 *
 * @module core/modules/cache
 * @preferred
 */
/***/
import { CacheAction, CacheRequest, ICacheData, IgnoreOption } from '../defs';
import { Ignore } from './Ignore';
export declare class Cache extends Ignore {
    private _state;
    constructor(ignore: IgnoreOption);
    /**
     * Set value to cache
     */
    set(href: string, request: CacheRequest, action: CacheAction): ICacheData;
    /**
     * Get data from cache
     */
    get(href: string): ICacheData;
    /**
     * Get request from cache
     */
    getRequest(href: string): CacheRequest;
    /**
     * Get action from cache
     */
    getAction(href: string): CacheAction;
    /**
     * Check if value exists into cache
     */
    has(href: string): boolean;
    /**
     * Delete value from cache
     */
    delete(href: string): boolean;
    /**
     * Update cache value
     */
    update(href: string, data: ICacheData): ICacheData;
}
