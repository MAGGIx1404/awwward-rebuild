/**
 * @barba/core
 * <br><br>
 * ## Barba core object
 *
 * Main methods:
 *
 * - `.init()` for initialization with options
 * - `.use()` for plugins
 *
 * @module core
 */
import { IBarbaOptions, IBarbaPlugin, IgnoreOption, ISchemaPage, ITransitionData, LinkEvent, Trigger } from './defs';
import { Cache } from './modules/Cache';
import { Logger } from './modules/Logger';
import { Prevent } from './modules/Prevent';
import { Transitions } from './modules/Transitions';
import { Views } from './modules/Views';
import './polyfills';
import { helpers, request, url } from './utils';
export declare class Core {
    /**
     * Version.
     */
    version: string;
    /**
     * Schemas.
     */
    schemaPage: ISchemaPage;
    /**
     * Logger class, allows plugins to create Logger.
     */
    Logger: typeof Logger;
    /**
     * Barba logger.
     */
    logger: Logger;
    /**
     * Plugins.
     */
    plugins: Array<IBarbaPlugin<any>>;
    /**
     * Options
     */
    timeout: number;
    cacheIgnore: IgnoreOption;
    prefetchIgnore: IgnoreOption;
    preventRunning: boolean;
    /**
     * Hooks
     */
    hooks: import("./hooks.js").Hooks;
    /**
     * Modules.
     */
    cache: Cache;
    prevent: Prevent;
    transitions: Transitions;
    views: Views;
    /**
     * Utils.
     */
    dom: import("./utils/dom.js").Dom;
    helpers: typeof helpers;
    history: import("./utils/history.js").History;
    request: typeof request;
    url: typeof url;
    private _data;
    private _requestCustomError;
    private _wrapper;
    /**
     * ### Init plugin with options.
     *
     * See [[IBarbaPlugin]] for more details.
     */
    use<T>(plugin: IBarbaPlugin<T>, options?: T): void;
    /**
     * ### Init barba with options.
     *
     * See [[IBarbaOptions]] for more details.
     *
     * Default values are:
     *
     * - transitions: `[]`
     * - views: `[]`
     * - schema: [[SchemaAttribute]]
     * - timeout: `2e3`
     * - cacheIgnore: `false`
     * - prefetchIgnore: `false`
     * - preventRunning: `false`
     * - prevent: `null`,
     * - debug: `false`
     * - logLevel: `'debug'`
     */
    init(
    /** @ignore */ { transitions, views, schema, requestError, timeout, cacheIgnore, prefetchIgnore, preventRunning, prevent: preventCustom, debug, logLevel, }?: IBarbaOptions): void;
    destroy(): void;
    get data(): ITransitionData;
    get wrapper(): HTMLElement;
    /**
     * ### Force a page change without Barba transition.
     */
    force(href: string): void;
    /**
     * ### Go for a Barba transition.
     *
     * Manage "self page" href:
     *
     * - if same url and no self transition, keep default behavior
     *   - link: reload the page
     *   - anchor: scroll to
     * - if same url with self transition, use it
     * - then start a page transition.
     */
    go(href: string, trigger?: Trigger, e?: LinkEvent | PopStateEvent): Promise<void>;
    /**
     * ### Start an "once" transition.
     *
     * If some registered "once" transition,
     * get the "resolved" transition from the store and start it.
     */
    once(readyData: ITransitionData): Promise<void>;
    /**
     * ### Start a "page" transition.
     *
     * 1. If no running transition, updates data with full URL properties and trigger.
     * 2. Get page from cache or init request.
     * 3. Wait if some transitions need "next" data (`sync: true`, `to: …`).
     * 4. Manage the history, depending on trigger.
     * 5. Get "data" and trigger "go" hook.
     * 6. Get the "resolved" transition from the store and start it.
     * 7. Update title and reset data (current, next = undefined).
     *
     * > If "self", use the "self" transition
     */
    page(href: string, trigger: Trigger, self: boolean): Promise<void>;
    /**
     * When a request error occurs.
     *
     * Allow the user to manage request error. (E.g: 404)
     */
    onRequestError(trigger: Trigger, ...args: any): boolean;
    /**
     * Programmatically prefetch
     */
    prefetch(href: string): void;
    /**
     * Bind event listeners.
     */
    private _bind;
    /**
     * Bind event listeners.
     */
    private _unbind;
    /**
     * When a element is entered.
     *
     * Get valid link element.
     * Cache URL if needed.
     */
    private _onLinkEnter;
    /**
     * When an element is clicked.
     *
     * Get valid link element.
     * Prevent same URL.
     * Go for a Barba transition.
     */
    private _onLinkClick;
    /**
     * When History state changes.
     *
     * Get "href" from URL
     * Go for a Barba transition.
     */
    private _onStateChange;
    /**
     * Get a valid link ancestor.
     *
     * Check for a "href" attribute.
     * Then check if eligible for Barba.
     */
    private _getLinkElement;
    /**
     * Reset pages data.
     *
     * Set "current" and unset "next".
     */
    private _resetData;
}
declare const core: Core;
export default core;
