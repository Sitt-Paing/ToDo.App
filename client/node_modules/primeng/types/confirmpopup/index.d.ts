import { PassThroughOption, PassThrough } from 'primeng/api';
import { ButtonPassThrough } from 'primeng/types/button';
import { TemplateRef } from '@angular/core';

/**
 * Custom pass-through(pt) options.
 * @template I Type of instance.
 *
 * @see {@link ConfirmPopup.pt}
 * @group Interface
 */
interface ConfirmPopupPassThroughOptions<I = unknown> {
    /**
     * Used to pass attributes to the host's DOM element.
     */
    host?: PassThroughOption<HTMLElement, I>;
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: PassThroughOption<HTMLDivElement, I>;
    /**
     * Used to pass attributes to the content's DOM element.
     */
    content?: PassThroughOption<HTMLDivElement, I>;
    /**
     * Used to pass attributes to the icon's DOM element.
     */
    icon?: PassThroughOption<HTMLElement, I>;
    /**
     * Used to pass attributes to the message's DOM element.
     */
    message?: PassThroughOption<HTMLSpanElement, I>;
    /**
     * Used to pass attributes to the footer's DOM element.
     */
    footer?: PassThroughOption<HTMLDivElement, I>;
    /**
     * Used to pass attributes to the reject Button component.
     * @see {@link ButtonPassThrough}
     */
    pcRejectButton?: ButtonPassThrough;
    /**
     * Used to pass attributes to the accept Button component.
     * @see {@link ButtonPassThrough}
     */
    pcAcceptButton?: ButtonPassThrough;
}
/**
 * Defines valid pass-through options in ConfirmPopup.
 * @see {@link ConfirmPopupPassThroughOptions}
 *
 * @template I Type of instance.
 */
type ConfirmPopupPassThrough<I = unknown> = PassThrough<I, ConfirmPopupPassThroughOptions<I>>;
/**
 * Defines valid templates in ConfirmPopup.
 * @group Templates
 */
interface ConfirmPopupTemplates {
    /**
     * Custom content template.
     */
    content(context: {
        $implicit?: any;
    }): TemplateRef<any>;
    /**
     * Custom template of rejecticon.
     */
    rejecticon(): TemplateRef<any>;
    /**
     * Custom template of accepticon.
     */
    accepticon(): TemplateRef<any>;
    /**
     * Headless template.
     */
    headless(context: {
        $implicit?: any;
    }): TemplateRef<any>;
}

export type { ConfirmPopupPassThrough, ConfirmPopupPassThroughOptions, ConfirmPopupTemplates };
