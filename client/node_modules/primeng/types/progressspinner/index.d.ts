import { PassThroughOption, PassThrough } from 'primeng/api';

/**
 * Custom pass-through(pt) options.
 * @template I Type of instance.
 *
 * @see {@link ProgressSpinner.pt}
 * @group Interface
 */
interface ProgressSpinnerPassThroughOptions<I = unknown> {
    /**
     * Used to pass attributes to the host's DOM element.
     */
    host?: PassThroughOption<HTMLElement, I>;
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: PassThroughOption<SVGSVGElement, I>;
    /**
     * Used to pass attributes to the spin's DOM element.
     */
    spin?: PassThroughOption<SVGSVGElement, I>;
    /**
     * Used to pass attributes to the circle's DOM element.
     */
    circle?: PassThroughOption<SVGCircleElement, I>;
}
/**
 * Defines valid pass-through options in ProgressSpinner.
 * @see {@link ProgressSpinnerPassThroughOptions}
 *
 * @template I Type of instance.
 */
type ProgressSpinnerPassThrough<I = unknown> = PassThrough<I, ProgressSpinnerPassThroughOptions<I>>;

export type { ProgressSpinnerPassThrough, ProgressSpinnerPassThroughOptions };
