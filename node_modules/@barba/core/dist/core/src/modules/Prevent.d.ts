/**
 * @barba/core/modules/prevent
 * <br><br>
 * ## Prevent checks.
 *
 * - Gathers all the tests that allow Barba to work and play transitions
 *
 * @module core/modules/prevent
 * @preferred
 */
/***/
import { IgnoreOption, Link, PreventCheck } from '../defs';
import { Ignore } from './Ignore';
export declare class Prevent extends Ignore {
    suite: string[];
    tests: Map<string, PreventCheck>;
    constructor(ignore: IgnoreOption);
    init(): void;
    add(name: string, check: PreventCheck, suite?: boolean): void;
    /**
     * Run individual test
     */
    run(name: string, el: Link, event: Event, href: string): boolean;
    /**
     * Run test suite
     */
    checkLink(el: Link, event: Event, href: string): boolean;
}
