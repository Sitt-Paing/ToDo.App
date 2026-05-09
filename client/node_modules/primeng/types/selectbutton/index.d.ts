import { TemplateRef } from '@angular/core';
import { PassThroughOption, PassThrough } from 'primeng/api';
import { ToggleButtonPassThrough } from 'primeng/types/togglebutton';

/**
 * Custom pass-through(pt) options.
 * @template I Type of instance.
 *
 * @see {@link SelectButton.pt}
 * @group Interface
 */
interface SelectButtonPassThroughOptions<I = unknown> {
    /**
     * Used to pass attributes to the host's DOM element.
     */
    host?: PassThroughOption<HTMLElement, I>;
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: PassThroughOption<HTMLDivElement, I>;
    /**
     * Used to pass attributes to the ToggleButton component.
     * @see {@link ToggleButtonPassThrough}
     */
    pcToggleButton?: ToggleButtonPassThrough;
}
/**
 * Custom passthrough attributes for each DOM elements
 * @group Interface
 */
type SelectButtonPassThrough<I = unknown> = PassThrough<I, SelectButtonPassThroughOptions<I>>;
/**
 * Custom change event.
 * @see {@link SelectButton.onChange}
 * @group Events
 */
interface SelectButtonChangeEvent {
    /**
     * Browser event.
     */
    originalEvent?: Event;
    /**
     * Selected option.
     */
    value?: any;
}
/**
 * Custom option click event.
 * @see {@link SelectButton.onOptionClick}
 * @group Events
 */
interface SelectButtonOptionClickEvent {
    /**
     * Browser event.
     */
    originalEvent?: Event;
    /**
     * Selected option.
     */
    option?: any;
    /**
     * Index of the selected option.
     */
    index?: number;
}
/**
 * Defines valid templates in SelectButton.
 * @group Templates
 */
interface SelectButtonTemplates {
    /**
     * Custom item template.
     */
    item(): TemplateRef<any>;
}

export type { SelectButtonChangeEvent, SelectButtonOptionClickEvent, SelectButtonPassThrough, SelectButtonPassThroughOptions, SelectButtonTemplates };
