/**
 * @module typings/core
 */
export declare type RuleName = IRules['strings'] | IRules['object'] | IRules['function'];
export declare type RuleType = 'strings' | 'object' | 'function';
export interface IRule {
    name: RuleName;
    type: RuleType;
}
export interface IRules {
    strings: 'namespace';
    object: 'route';
    function: 'custom';
}
