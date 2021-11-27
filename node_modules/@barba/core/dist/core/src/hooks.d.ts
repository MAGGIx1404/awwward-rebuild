/**
 * @barba/core/modules/hooks
 * <br><br>
 * ## Hooks manager.
 *
 * - Register and trigger hooks
 *
 * Hooks can be easily registered:
 *
 * ```js
 * hooks.leave(callback, context);
 * ```
 *
 * @module core/modules/hooks
 * @preferred
 */
/***/
import { HookFunction, HookMethods, HooksAll } from './defs';
import { Logger } from './modules/Logger';
interface IHookInfos {
    ctx: any;
    fn: HookFunction;
}
export declare class Hooks extends HookMethods {
    /**
     * Allow the use of `hooks[name](cb, ctx)`.
     */
    [key: string]: any;
    logger: Logger;
    /**
     * All available hooks.
     *
     * See [[HooksAll]]
     */
    all: HooksAll[];
    /**
     * Registered hooks.
     *
     * - Unique hook name
     * - Associated data set(s) (callback + context)
     */
    registered: Map<HooksAll, Set<IHookInfos>>;
    constructor();
    init(): void;
    /**
     * Do hook.
     *
     * Trigger registered hooks.
     */
    do(name: HooksAll, ...args: any): Promise<any>;
    clear(): void;
    /**
     * Help, print available and registered hooks.
     */
    help(): void;
}
declare const hooks: Hooks;
export { hooks };
