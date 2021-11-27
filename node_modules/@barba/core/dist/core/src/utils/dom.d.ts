/**
 * @barba/core/utils/dom
 * <br><br>
 * ## Dom utils
 *
 * - Access DOM contents
 * - DOM vs string conversions
 *
 * @module core/utils/dom
 * @preferred
 */
import { Link, Scope, Wrapper } from '../defs';
export declare class Dom {
    private _attr;
    private _parser;
    /**
     * Convert HTMLDocument to string.
     */
    toString(el: HTMLElement): string;
    /**
     * Parse HTML string to HTMLDocument.
     */
    toDocument(htmlString: string): HTMLDocument;
    /**
     * Parse HTML string to DIVElement.
     *
     * DOMParser.parseFromString fails with img[srcset] on iOS.
     * see https://github.com/barbajs/barba/issues/362
     */
    toElement(htmlString: string): HTMLDivElement;
    /**
     * Get HTML content.
     */
    getHtml(doc?: HTMLDocument): string;
    /**
     * Get full document content.
     */
    /**
     * Get `[data-barba="wrapper"]`.
     */
    getWrapper(scope?: Scope): Wrapper;
    /**
     * Get `[data-barba="container"]`.
     */
    getContainer(scope?: Scope): HTMLElement | null;
    /**
     * Remove container and store next sibling (if applicable).
     */
    removeContainer(container: HTMLElement): void;
    /**
     * Add container before next sibling or at the end of the wrapper.
     */
    addContainer(container: HTMLElement, wrapper: HTMLElement): void;
    /**
     * Get `[data-barba-namespace]`.
     */
    getNamespace(scope?: Scope): string | null;
    /**
     * Get URL from `href` value.
     */
    getHref(el: Link): string | null;
    resolveUrl(...urls: string[]): string;
    /**
     * Insert node after another node.
     */
    private _insertAfter;
}
declare const dom: Dom;
export { dom };
