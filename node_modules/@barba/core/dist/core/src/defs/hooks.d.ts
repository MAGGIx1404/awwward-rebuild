/**
 * @module typings/core
 */
import { ITransitionData, ITransitionPage, IViewData } from './index';
export declare type HooksBarba = 'ready' | 'page' | 'reset' | 'currentAdded' | 'currentRemoved' | 'nextAdded' | 'nextRemoved';
export declare type HooksOnce = 'beforeOnce' | 'once' | 'afterOnce';
export declare type HooksPage = 'before' | 'beforeLeave' | 'leave' | 'afterLeave' | 'beforeEnter' | 'enter' | 'afterEnter' | 'after';
export declare type HooksBefore = 'beforeOnce' | 'beforeLeave' | 'beforeEnter';
export declare type HooksAfter = 'afterOnce' | 'afterLeave' | 'afterEnter';
export declare type HooksTransition = HooksOnce | HooksPage;
export declare type HooksView = HooksBefore | HooksAfter;
export declare type HooksAll = HooksBarba | HooksTransition;
export declare type HooksTransitionMap = {
    [key in HooksTransition]?: any;
};
export declare type HookFunction = (data?: ITransitionData | IViewData, t?: ITransitionPage) => Promise<void> | void;
export declare class HookMethods {
    before: (fn: HookFunction, ctx?: any) => void;
    beforeLeave: (fn: HookFunction, ctx?: any) => void;
    leave: (fn: HookFunction, ctx?: any) => void;
    afterLeave: (fn: HookFunction, ctx?: any) => void;
    beforeEnter: (fn: HookFunction, ctx?: any) => void;
    enter: (fn: HookFunction, ctx?: any) => void;
    afterEnter: (fn: HookFunction, ctx?: any) => void;
    after: (fn: HookFunction, ctx?: any) => void;
}
