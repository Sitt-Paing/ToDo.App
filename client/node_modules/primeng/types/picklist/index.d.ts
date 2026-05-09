import { TemplateRef } from '@angular/core';
import { PassThroughOption, PassThrough } from 'primeng/api';
import { ButtonPassThrough } from 'primeng/types/button';
import { ListBoxPassThrough } from 'primeng/types/listbox';

/**
 * Custom pass-through(pt) options.
 * @template I Type of instance.
 *
 * @see {@link PickList.pt}
 * @group Interface
 */
interface PickListPassThroughOptions<I = unknown> {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: PassThroughOption<HTMLDivElement, I>;
    /**
     * Used to pass attributes to the source controls' DOM element.
     */
    sourceControls?: PassThroughOption<HTMLDivElement, I>;
    /**
     * Used to pass attributes to the source list container's DOM element.
     */
    sourceListContainer?: PassThroughOption<HTMLDivElement, I>;
    /**
     * Used to pass attributes to the transfer controls' DOM element.
     */
    transferControls?: PassThroughOption<HTMLDivElement, I>;
    /**
     * Used to pass attributes to the target list container's DOM element.
     */
    targetListContainer?: PassThroughOption<HTMLDivElement, I>;
    /**
     * Used to pass attributes to the target controls' DOM element.
     */
    targetControls?: PassThroughOption<HTMLDivElement, I>;
    /**
     * Used to pass attributes to the source move up Button component.
     * @see {@link ButtonPassThrough}
     */
    pcSourceMoveUpButton?: ButtonPassThrough;
    /**
     * Used to pass attributes to the source move top Button component.
     * @see {@link ButtonPassThrough}
     */
    pcSourceMoveTopButton?: ButtonPassThrough;
    /**
     * Used to pass attributes to the source move down Button component.
     * @see {@link ButtonPassThrough}
     */
    pcSourceMoveDownButton?: ButtonPassThrough;
    /**
     * Used to pass attributes to the source move bottom Button component.
     * @see {@link ButtonPassThrough}
     */
    pcSourceMoveBottomButton?: ButtonPassThrough;
    /**
     * Used to pass attributes to the move to target Button component.
     * @see {@link ButtonPassThrough}
     */
    pcMoveToTargetButton?: ButtonPassThrough;
    /**
     * Used to pass attributes to the move all to target Button component.
     * @see {@link ButtonPassThrough}
     */
    pcMoveAllToTargetButton?: ButtonPassThrough;
    /**
     * Used to pass attributes to the move to source Button component.
     * @see {@link ButtonPassThrough}
     */
    pcMoveToSourceButton?: ButtonPassThrough;
    /**
     * Used to pass attributes to the move all to source Button component.
     * @see {@link ButtonPassThrough}
     */
    pcMoveAllToSourceButton?: ButtonPassThrough;
    /**
     * Used to pass attributes to the target move up Button component.
     * @see {@link ButtonPassThrough}
     */
    pcTargetMoveUpButton?: ButtonPassThrough;
    /**
     * Used to pass attributes to the target move top Button component.
     * @see {@link ButtonPassThrough}
     */
    pcTargetMoveTopButton?: ButtonPassThrough;
    /**
     * Used to pass attributes to the target move down Button component.
     * @see {@link ButtonPassThrough}
     */
    pcTargetMoveDownButton?: ButtonPassThrough;
    /**
     * Used to pass attributes to the target move bottom Button component.
     * @see {@link ButtonPassThrough}
     */
    pcTargetMoveBottomButton?: ButtonPassThrough;
    /**
     * Used to pass attributes to the Listbox component.
     * @see {@link ListBoxPassThrough}
     */
    pcListbox?: ListBoxPassThrough;
}
/**
 * Defines valid pass-through options in PickList.
 * @see {@link PickListPassThroughOptions}
 *
 * @template I Type of instance.
 */
type PickListPassThrough<I = unknown> = PassThrough<I, PickListPassThroughOptions<I>>;
/**
 * Callbacks to invoke on filter.
 * @group Interface
 */
interface PickListFilterOptions {
    filter?: (value?: any) => void;
    reset?: () => void;
}
/**
 * Custom move to source event.
 * @see {@link PickList.onMoveToSource}
 * @group Events
 */
interface PickListMoveToSourceEvent {
    /**
     * Moved items.
     */
    items: any[];
}
/**
 * Custom move all to source event.
 * @see {@link PickList.onMoveAllToSource}
 * @extends {PickListMoveToSourceEvent}
 * @group Events
 */
interface PickListMoveAllToSourceEvent extends PickListMoveToSourceEvent {
}
/**
 * Custom move all to target event.
 * @see {@link PickList.onMoveAllToTarget}
 * @extends {PickListMoveToSourceEvent}
 * @group Events
 */
interface PickListMoveAllToTargetEvent extends PickListMoveToSourceEvent {
}
/**
 * Custom move to target event.
 * @see {@link PickList.onMoveToTarget}
 * @extends {PickListMoveToSourceEvent}
 * @group Events
 */
interface PickListMoveToTargetEvent extends PickListMoveToSourceEvent {
}
/**
 * Custom move source reorder event.
 * @see {@link PickList.onSourceReorder}
 * @extends {PickListMoveToSourceEvent}
 * @group Events
 */
interface PickListSourceReorderEvent extends PickListMoveToSourceEvent {
}
/**
 * Custom move target reorder event.
 * @see {@link PickList.onTargetReorder}
 * @extends {PickListMoveToSourceEvent}
 * @group Events
 */
interface PickListTargetReorderEvent extends PickListMoveToSourceEvent {
}
/**
 * Custom source select event.
 * @see {@link PickList.onSourceSelect}
 * @group Events
 */
interface PickListSourceSelectEvent {
    /**
     * Browser event.
     */
    originalEvent: Event;
    /**
     * Selected items.
     */
    items: any[];
}
/**
 * Custom target select event.
 * @see {@link PickList.onTargetSelect}
 * @extends {PickListSourceSelectEvent}
 * @group Events
 */
interface PickListTargetSelectEvent extends PickListSourceSelectEvent {
}
/**
 * Custom source filter event.
 * @see {@link PickList.onSourceFilter}
 * @group Events
 */
interface PickListSourceFilterEvent {
    /**
     * Filter value.
     */
    query: string | null | undefined;
    /**
     * Filtered items.
     */
    value: any[] | null | undefined;
}
/**
 * Custom target filter event.
 * @see {@link PickList.onTargetFilter}
 * @extends {PickListSourceFilterEvent}
 * @group Events
 */
interface PickListTargetFilterEvent extends PickListSourceFilterEvent {
}
/**
 * Defines valid templates in PickList.
 * @group Templates
 */
interface PickListTemplates {
    /**
     * Custom item template.
     */
    item(context: {
        /**
         * Item instance.
         */
        $implicit: any;
        /**
         * Item index.
         */
        index: number;
    }): TemplateRef<{
        $implicit: any;
        index: number;
    }>;
    /**
     * Custom source header template.
     */
    sourceHeader(): TemplateRef<any>;
    /**
     * Custom target header template.
     */
    targetHeader(): TemplateRef<any>;
    /**
     * Custom source filter template.
     */
    sourceFilter(context: {
        /**
         * Source filter options.
         */
        options: PickListFilterOptions;
    }): TemplateRef<{
        options: PickListFilterOptions;
    }>;
    /**
     * Custom target filter template.
     */
    targetFilter(context: {
        /**
         * Target filter options.
         */
        options: PickListFilterOptions;
    }): TemplateRef<{
        options: PickListFilterOptions;
    }>;
    /**
     * Custom source list empty message template.
     */
    emptymessagesource(): TemplateRef<any>;
    /**
     * Custom source list empty filter message template.
     */
    emptyfiltermessagesource(): TemplateRef<any>;
    /**
     * Custom target list empty message template.
     */
    emptymessagetarget(): TemplateRef<any>;
    /**
     * Custom target list empty filter message template.
     */
    emptyfiltermessagetarget(): TemplateRef<any>;
    /**
     * Custom move up icon template.
     */
    moveupicon(): TemplateRef<any>;
    /**
     * Custom move top icon template.
     */
    movetopicon(): TemplateRef<any>;
    /**
     * Custom move down icon template.
     */
    movedownicon(): TemplateRef<any>;
    /**
     * Custom move bottom icon template.
     */
    movebottomicon(): TemplateRef<any>;
    /**
     * Custom move to target icon template.
     */
    movetotargeticon(context: {
        /**
         * Boolean value indicates if the view is changed according to breakpoints.
         */
        $implicit: boolean;
    }): TemplateRef<{
        $implicit: boolean;
    }>;
    /**
     * Custom move all to target icon template.
     */
    movealltotargeticon(context: {
        /**
         * Boolean value indicates if the view is changed according to breakpoints.
         */
        $implicit: boolean;
    }): TemplateRef<{
        $implicit: boolean;
    }>;
    /**
     * Custom move to source icon template.
     */
    movetosourceicon(context: {
        /**
         * Boolean value indicates if the view is changed according to breakpoints.
         */
        $implicit: boolean;
    }): TemplateRef<{
        $implicit: boolean;
    }>;
    /**
     * Custom move all to source icon template.
     */
    movealltosourceicon(context: {
        /**
         * Boolean value indicates if the view is changed according to breakpoints.
         */
        $implicit: boolean;
    }): TemplateRef<{
        $implicit: boolean;
    }>;
    /**
     * Custom target filter icon template.
     */
    targetfiltericon(): TemplateRef<any>;
    /**
     * Custom source filter icon template.
     */
    sourcefiltericon(): TemplateRef<any>;
}

export type { PickListFilterOptions, PickListMoveAllToSourceEvent, PickListMoveAllToTargetEvent, PickListMoveToSourceEvent, PickListMoveToTargetEvent, PickListPassThrough, PickListPassThroughOptions, PickListSourceFilterEvent, PickListSourceReorderEvent, PickListSourceSelectEvent, PickListTargetFilterEvent, PickListTargetReorderEvent, PickListTargetSelectEvent, PickListTemplates };
