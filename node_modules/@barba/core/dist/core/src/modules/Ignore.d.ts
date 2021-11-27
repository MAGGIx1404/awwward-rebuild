/**
 * @barba/core/modules/ignore
 * <br><br>
 * ## Manage ignore options.
 *
 * - cache
 * - prefetch
 *
 * @module core/modules/ignore
 * @preferred
 */
/***/
import { IgnoreOption } from '../defs';
export declare class Ignore {
    private _ignoreAll;
    private _ignoreRegexes;
    constructor(ignore: IgnoreOption);
    checkHref(href: string): boolean;
}
