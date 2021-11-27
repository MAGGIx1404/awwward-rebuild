import { LinkEvent, Trigger } from '../defs';
/***/
interface ICoords {
    x: number;
    y: number;
}
/**
 * History item.
 *
 * @property namespace
 * @property scroll
 * @property URL
 */
interface IStateItem {
    /** namespace */
    ns: string | undefined;
    /** Scroll position */
    scroll: ICoords;
    /** URL */
    url: string;
}
export declare class History {
    private _session;
    private _states;
    private _pointer;
    /**
     * Init with first state.
     */
    init(url: string, ns: string): void;
    change(url: string, trigger: Trigger, e?: LinkEvent | PopStateEvent): Trigger;
    /**
     * Add a new state.
     */
    add(url: string, trigger: Trigger): void;
    /**
     * Update state.
     */
    update(data: any, i?: number): void;
    /**
     * Remove last state.
     */
    remove(i?: number): void;
    /**
     * Delete all states.
     */
    clear(): void;
    /**
     * Replace all states.
     */
    replace(newStates: IStateItem[]): void;
    /**
     * Get state by index.
     */
    get(index: number): IStateItem;
    /**
     * Set state by index.
     */
    set(i: number, state: IStateItem): IStateItem;
    /**
     * Get the current state.
     */
    get current(): IStateItem;
    /**
     * Get the last state (top of the history stack).
     */
    get state(): IStateItem;
    /**
     * Get the previous state.
     */
    get previous(): IStateItem | null;
    /**
     * Get the state size.
     */
    get size(): number;
    /**
     * Get the history action: push vs replace
     */
    private _getAction;
    /**
     * Get the direction of popstate change
     */
    private _getDirection;
}
declare const history: History;
export { history };
