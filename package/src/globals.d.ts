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
declare const thisProperty: Property;

/** Represents the composition time, in seconds, at which the expresion is being evaluated. */
declare const time: number;

/* eslint-disable @typescript-eslint/no-explicit-any */

/** Represents the value at the current time for the property containing the expression. */
declare const value: number | any[] | string;

/* eslint-enable @typescript-eslint/no-explicit-any */

/** Retrieves another composition by name. */
declare function comp(name: string): Comp;

/** Retrieves a footage item by name. */
declare function footage(name: string): Footage;

/**
 * The `framesPerSecond` value becomes the frame rate from which the rest of the expression operates.
 * This expression allows you to set the frame rate for a property to be lower than the frame rate of the composition.
 */
declare function posterizeTime(framesPerSecond: number): number;

declare function timeToFrames(
    time?: number,
    fps?: number,
    isDuration?: boolean
): number;
