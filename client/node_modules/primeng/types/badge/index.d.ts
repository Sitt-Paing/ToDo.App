import { PassThroughOption, PassThrough } from 'primeng/api';

/**
 * Custom passthrough(pt) options.
 * @see {@link Badge.pt}
 * @group Interface
 */
interface BadgePassThroughOptions<I = unknown> {
    /**
     * Used to pass attributes to the host's DOM element.
     */
    host?: PassThroughOption<HTMLElement, I>;
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: PassThroughOption<HTMLElement, I>;
}
/**
 * Defines valid pass-through options in Badge component.
 * @see {@link BadgePassThroughOptions}
 *
 * @template I Type of instance.
 */
type BadgePassThrough<I = unknown> = PassThrough<I, BadgePassThroughOptions<I>>;

export type { BadgePassThrough, BadgePassThroughOptions };
