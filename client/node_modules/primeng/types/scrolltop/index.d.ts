import { TemplateRef } from '@angular/core';
import { PassThroughOption, PassThrough } from 'primeng/api';
import { ButtonPassThrough } from 'primeng/types/button';

/**
 * Custom pass-through(pt) options.
 * @template I Type of instance.
 *
 * @see {@link ScrollTop.pt}
 * @group Interface
 */
interface ScrollTopPassThroughOptions<I = unknown> {
    /**
     * Used to pass attributes to the host's DOM element.
     */
    host?: PassThroughOption<HTMLElement, I>;
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: PassThroughOption<HTMLElement, I>;
    /**
     * Used to pass attributes to the Button component.
     * @see {@link ButtonPassThrough}
     */
    pcButton?: ButtonPassThrough;
}
/**
 * Defines valid pass-through options in ScrollTop.
 * @see {@link ScrollTopPassThroughOptions}
 *
 * @template I Type of instance.
 */
type ScrollTopPassThrough<I = unknown> = PassThrough<I, ScrollTopPassThroughOptions<I>>;
/**
 * Defines valid templates in ScrollTop.
 * @group Templates
 */
interface ScrollTopTemplates {
    /**
     * Icon of the component.
     */
    icon(context: {
        /**
         * Style class of the icon.
         */
        styleClass: string;
    }): TemplateRef<{
        styleClass: string;
    }>;
}

export type { ScrollTopPassThrough, ScrollTopPassThroughOptions, ScrollTopTemplates };
