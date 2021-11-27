/**
 * @barba/core/modules/store
 * <br><br>
 * ## Transitions store.
 *
 * - Resolve transition
 * - Manage rules
 *
 * @module core/modules/store
 * @preferred
 */
/***/
import { ITransitionData, ITransitionFilters, ITransitionOnce, ITransitionPage } from '../defs';
import { Logger } from './Logger';
export declare class Store {
    logger: Logger;
    /**
     * All registered transitions.
     */
    all: ITransitionPage[];
    /**
     * "Page only" registered transitions.
     */
    page: ITransitionPage[];
    /**
     * "Once only" registered transitions.
     */
    once: ITransitionOnce[];
    /**
     * Rules for transition resolution.
     *
     * Defaults:
     *
     * - namespace
     * - custom
     */
    private _rules;
    /**
     * Init store.
     */
    constructor(transitions?: ITransitionPage[]);
    /**
     * Add rule or transition.
     */
    add(type: 'rule' | 'transition', data: any): void;
    /**
     * Resolve transition.
     */
    resolve(data: ITransitionData, filters?: ITransitionFilters): ITransitionOnce | ITransitionPage;
    /**
     * ### Update store.
     *
     * - Reorder transition by priorities
     * - Get wait indicator
     * - Get once transitions
     */
    update(): void;
    /**
     * ### Check if transition apply.
     *
     * Based on rule, page data and optional direction:
     *
     * 1. transition has no rule "property":
     *    - always returns true
     * 2. transition has rule "property":
     *     - "strings" should be present on both side (transition + page) and match
     *     - "function" should return true
     */
    private _check;
    /**
     * ### Calculate transition priority.
     *
     * Based on:
     *
     * - rule "position" (index) give tens, hundreds, thousands, …
     * - from/to properties give units (0, 1 or 2)
     */
    private _calculatePriority;
    private _addPriority;
}
