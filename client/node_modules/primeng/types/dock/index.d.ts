import { TemplateRef } from '@angular/core';
import { PassThroughOption, PassThrough } from 'primeng/api';

/**
 * Custom pass-through(pt) options.
 * @template I Type of instance.
 *
 * @see {@link Dock.pt}
 * @group Interface
 */
interface DockPassThroughOptions<I = unknown> {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: PassThroughOption<HTMLElement, I>;
    /**
     * Used to pass attributes to the list container's DOM element.
     */
    listContainer?: PassThroughOption<HTMLDivElement, I>;
    /**
     * Used to pass attributes to the list's DOM element.
     */
    list?: PassThroughOption<HTMLUListElement, I>;
    /**
     * Used to pass attributes to the item's DOM element.
     */
    item?: PassThroughOption<HTMLLIElement, I>;
    /**
     * Used to pass attributes to the item content's DOM element.
     */
    itemContent?: PassThroughOption<HTMLDivElement, I>;
    /**
     * Used to pass attributes to the item link's DOM element.
     */
    itemLink?: PassThroughOption<HTMLAnchorElement, I>;
    /**
     * Used to pass attributes to the item icon's DOM element.
     */
    itemIcon?: PassThroughOption<HTMLSpanElement, I>;
}
/**
 * Defines valid pass-through options in Dock.
 * @see {@link DockPassThroughOptions}
 *
 * @template I Type of instance.
 */
type DockPassThrough<I = unknown> = PassThrough<I, DockPassThroughOptions<I>>;
/**
 * Defines valid templates in Dock.
 * @group Templates
 */
interface DockTemplates {
    /**
     * Custom template of item.
     * @param {Object} context - item data.
     */
    item(context: {
        /**
         * Item instance.
         */
        $implicit: any;
    }): TemplateRef<{
        $implicit: any;
    }>;
}

export type { DockPassThrough, DockPassThroughOptions, DockTemplates };
