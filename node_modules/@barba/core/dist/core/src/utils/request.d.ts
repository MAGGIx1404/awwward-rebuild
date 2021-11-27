/**
 * @barba/core/utils/request
 * <br><br>
 * ## Fetch pages for transitions.
 *
 * - Includes timeout
 * - Uses Fetch API
 * - Handles errors
 *
 * @module core/utils/request
 * @preferred
 */
/***/
import { RequestError } from '../defs';
/**
 * Init a page request.
 * Fetch the page and returns a promise with the text content.
 */
declare function request(url: string, ttl: number, requestError: RequestError): Promise<string>;
export { request };
