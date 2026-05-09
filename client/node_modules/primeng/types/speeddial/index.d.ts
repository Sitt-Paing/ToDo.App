import { TemplateRef } from '@angular/core';
import { PassThroughOption, PassThrough } from 'primeng/api';
import { ButtonPassThrough } from 'primeng/types/button';

/**
 * Custom pass-through(pt) options.
 * @template I Type of instance.
 *
 * @see {@link SpeedDial.pt}
 * @group Interface
 */
interface SpeedDialPassThroughOptions<I = unknown> {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: PassThroughOption<HTMLDivElement, I>;
    /**
     * Used to pass attributes to the Button component.
     * @see {@link ButtonPassThrough}
     */
    pcButton?: ButtonPassThrough;
    /**
     * Used to pass attributes to the list's DOM element.
     */
    list?: PassThroughOption<HTMLUListElement, I>;
    /**
     * Used to pass attributes to the item's DOM element.
     */
    item?: PassThroughOption<HTMLLIElement, I>;
    /**
     * Used to pass attributes to the action's Button component.
     * @see {@link ButtonPassThrough}
     */
    pcAction?: ButtonPassThrough;
    /**
     * Used to pass attributes to the action icon's DOM element.
     */
    actionIcon?: PassThroughOption<HTMLSpanElement, I>;
    /**
     * Used to pass attributes to the mask's DOM element.
     */
    mask?: PassThroughOption<HTMLDivElement, I>;
}
/**
 * Defines valid pass-through options in SpeedDial component.
 * @see {@link SpeedDialPassThroughOptions}
 *
 * @template I Type of instance.
 */
type SpeedDialPassThrough<I = unknown> = PassThrough<I, SpeedDialPassThroughOptions<I>>;
/**
 * Defines valid templates in SpeedDial.
 * @group Templates
 */
interface SpeedDialTemplates {
    /**
     * Custom button template.
     */
    button(context: {
        toggleCallback: (event: Event) => void;
    }): TemplateRef<any>;
    /**
     * Custom icon template.
     */
    icon(): TemplateRef<any>;
    /**
     * Custom item template.
     */
    item(context: {
        item: any;
        index: number;
        toggleCallback: (event: Event, item: any) => void;
    }): TemplateRef<any>;
    /**
     * Custom item icon template.
     */
    itemicon(context: {
        item: any;
    }): TemplateRef<any>;
}

export type { SpeedDialPassThrough, SpeedDialPassThroughOptions, SpeedDialTemplates };
