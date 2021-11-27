/**
 * @barba/core/modules/views
 * <br><br>
 * ## Views manager.
 *
 * @module core/modules/views
 * @preferred
 */
/***/
import { HooksView, IView } from '../defs';
export declare class Views {
    /**
     * Available hook names for views.
     */
    names: HooksView[];
    /**
     * Registered views by namespace.
     */
    byNamespace: Map<string, IView>;
    /**
     * Init views.
     */
    constructor(views: IView[]);
    /**
     * Create the hook method.
     *
     * - get view based on namespace
     * - execute callback with transition data
     */
    private _createHook;
}
