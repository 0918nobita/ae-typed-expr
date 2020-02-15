/** Composition */
declare class Comp {
    private _: 'comp';

    /** Returns the composition width, in pixels. */
    width: number;

    /** Returns the composition height, in pixels. */
    height: number;

    /** Returns the composition duration, in seconds. */
    duration: number;

    /** Retrives the layer by number (order in the Timeline panel). */
    layer(index: number): Layer | Light | Camera;

    /** Retrives the layer by name.
     * Names are matched according to layer name, or source name if there is no layer name.
     * If duplicate names exist, After Effects uses the first (topmost) one in the Timeline panel.
     */
    layer(name: string): Layer | Light | Camera;
}
