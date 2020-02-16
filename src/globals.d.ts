/** Returns the project color depth value. */
declare const colorDepth: number;

/** Represents the composition containing the expression. */
declare const thisComp: Comp;

/**
 * Represents the layer containing the expression.
 * Because `thisLayer` is the default object, its use is optional.
 */
declare const thisLayer: Layer | Light | Camera;

/** Represents the property containing the expression. */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const thisProperty: Property<any>;

/** Represents the composition time, in seconds, at which the expresion is being evaluated. */
declare const time: number;

/** Represents the value at the current time for the property containing the expression. */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const value: number | any[] | string;

/** Retrieves another composition by name. */
declare function comp(name: string): Comp;

/** Retrieves a footage item by name. */
declare function footage(name: string): Footage;

/**
 * The `framesPerSecond` value becomes the frame rate from which the rest of the expression operates.
 * This expression allows you to set the frame rate for a property to be lower than the frame rate of the composition.
 */
declare function posterizeTime(framesPerSecond: number): number;

/**
 * Converts the value of `t`, which defaults to the current composition time, to an integer number of frames.
 * The number of frames per second is specified in the `fps` argument, which defaults to the frame rate of the current composition.
 * The `isDuration` argument, which defaults to false, should be true if the `t` value represents a difference between two times instead of an absolute time.
 * Absolute times are rounded down toward negative infinity; durations are rounded away from zero (up for positive values).
 */
declare function timeToFrames(
    t?: number,
    fps?: number,
    isDuration?: boolean
): number;
