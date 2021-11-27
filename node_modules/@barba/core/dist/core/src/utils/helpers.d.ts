/**
 * @barba/core/utils/helpers
 * <br><br>
 * ## Helpers
 *
 * - Update next page data
 *
 * @module core/utils/helpers
 * @preferred
 */
/***/
import ptr from 'path-to-regexp';
import { ITransitionData } from '../defs';
/**
 * Update `data.next`, the title and the history
 */
export declare const update: (page: Promise<string | void>, data: ITransitionData) => Promise<void>;
/**
 * Next tick
 */
export declare const nextTick: () => Promise<unknown>;
/**
 * Turn a route string such as `/user/:name` into a regular expression.
 *
 * Used for:
 *
 * - routes to ignore
 * - route transition resolution
 *
 * @see https://www.npmjs.com/package/path-to-regexp
 */
declare const pathToRegexp: typeof ptr;
export { pathToRegexp };
