/**
 * @barba/core/modules/transitions
 * <br><br>
 * ## Transitions manager.
 *
 * - Handle hooks and transition lifecycle
 *
 * @module core/modules/transitions
 * @preferred
 */
/***/
import { ITransitionData, ITransitionFilters, ITransitionOnce, ITransitionPage, Wrapper } from '../defs';
import { Logger } from './Logger';
import { Store } from './Store';
export declare class Transitions {
    logger: Logger;
    store: Store;
    private _running;
    constructor(transitions?: ITransitionPage[]);
    /**
     * Get resolved transition
     *
     * - based on data
     */
    get(data: ITransitionData, filters?: ITransitionFilters): ITransitionOnce | ITransitionPage;
    /**
     * Animation running status.
     */
    get isRunning(): boolean;
    set isRunning(status: boolean);
    /**
     * Check for registered once transition(s).
     */
    get hasOnce(): boolean;
    /**
     * Check for registered self transition.
     */
    get hasSelf(): boolean;
    /**
     * ### Wait indicator.
     *
     * Tells Barba to get next page data<br>
     * before starting the resolution<br>
     * because some registered transitions need<br>
     * next page data to be resolved (eg: `sync: true`, `to: { namespace }`, …)
     */
    get shouldWait(): boolean;
    /**
     * ### Do "once" transition.
     *
     * Hooks: see [[HooksOnce]].
     */
    doOnce({ data, transition, }: {
        data: ITransitionData;
        transition: ITransitionOnce;
    }): Promise<void>;
    /**
     * ### Do "page" transition.
     *
     * Hooks: see [[HooksPage]].
     *
     * `sync: false` (default) order:
     *
     * 1. before
     * 2. beforeLeave
     * 3. leave
     * 4. afterLeave
     * 5. beforeEnter
     * 6. enter
     * 7. afterEnter
     * 8. after
     *
     * `sync: true` order:
     *
     * 1. before
     * 2. beforeLeave
     * 3. beforeEnter
     * 4. leave & enter
     * 5. afterLeave
     * 6. afterEnter
     * 7. after
     */
    doPage({ data, transition, page, wrapper, }: {
        data: ITransitionData;
        transition: ITransitionPage;
        page: Promise<string | void>;
        wrapper: Wrapper;
    }): Promise<void>;
    /**
     * Once hook + async "once" transition.
     */
    once(data: ITransitionData, t: ITransitionOnce): Promise<void>;
    /**
     * Leave hook + async "leave" transition.
     */
    leave(data: ITransitionData, t: ITransitionPage): Promise<any>;
    /**
     * Enter hook + async "enter" transition.
     */
    enter(data: ITransitionData, t: ITransitionPage, leaveResult?: any): Promise<void>;
    /**
     * Add next container.
     */
    add(data: ITransitionData, wrapper: Wrapper): Promise<void>;
    /**
     * Remove current container.
     */
    remove(data: ITransitionData): Promise<void>;
    private _isTransitionError;
    /**
     * Do hooks + async transition methods.
     */
    private _doAsyncHook;
}
