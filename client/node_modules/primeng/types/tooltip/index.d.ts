import { PassThroughOption, PassThrough } from 'primeng/api';

/**
 * Custom pass-through(pt) options.
 * @template I Type of instance.
 *
 * @see {@link Tooltip.pt}
 * @group Interface
 */
interface TooltipPassThroughOptions<I = unknown> {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: PassThroughOption<HTMLDivElement, I>;
    /**
     * Used to pass attributes to the arrow's DOM element.
     */
    arrow?: PassThroughOption<HTMLDivElement, I>;
    /**
     * Used to pass attributes to the text's DOM element.
     */
    text?: PassThroughOption<HTMLDivElement, I>;
}
/**
 * Defines valid pass-through options in Tooltip.
 * @see {@link TooltipPassThroughOptions}
 *
 * @template I Type of instance.
 */
type TooltipPassThrough<I = unknown> = PassThrough<I, TooltipPassThroughOptions<I>>;

export type { TooltipPassThrough, TooltipPassThroughOptions };
