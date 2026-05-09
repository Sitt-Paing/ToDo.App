import { TemplateRef } from '@angular/core';
import { PassThroughOption, PassThrough } from 'primeng/api';
import { ButtonPassThrough } from 'primeng/types/button';
import { MenuPassThrough } from 'primeng/types/menu';

/**
 * Custom pass-through(pt) options.
 * @template I Type of instance.
 *
 * @see {@link SplitButton.pt}
 * @group Interface
 */
interface SplitButtonPassThroughOptions<I = unknown> {
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
     * Used to pass attributes to the dropdown Button component.
     * @see {@link ButtonPassThrough}
     */
    pcDropdown?: ButtonPassThrough;
    /**
     * Used to pass attributes to the TieredMenu component.
     */
    pcMenu?: MenuPassThrough;
}
/**
 * Defines valid pass-through options in SplitButton component.
 * @see {@link SplitButtonPassThroughOptions}
 *
 * @template I Type of instance.
 */
type SplitButtonPassThrough<I = unknown> = PassThrough<I, SplitButtonPassThroughOptions<I>>;
/**
 * Defines valid templates in SplitButton.
 * @group Templates
 */
interface SplitButtonTemplates {
    /**
     * Custom template of content.
     */
    content(): TemplateRef<any>;
    /**
     * Custom template of dropdownicon.
     */
    dropdownicon(): TemplateRef<any>;
}
/**
 * Defines ButtonProps interface.
 */
interface ButtonProps {
    ariaLabel?: string;
}
/**
 * Defines MenuButtonProps interface.
 */
interface MenuButtonProps {
    ariaLabel?: string;
    ariaHasPopup?: boolean;
    ariaExpanded?: boolean;
    ariaControls?: string;
}

export type { ButtonProps, MenuButtonProps, SplitButtonPassThrough, SplitButtonPassThroughOptions, SplitButtonTemplates };
