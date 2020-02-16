declare class Property<T> {
    private _: 'property';

    /** Returns the name of the property or property group */
    name: string;

    propertyGroup(countUp?: number): Group;

    /**
     * Returns the index of a property relative to other properties
     * in its property group, including property groups within masks,
     * text animators, selectors, shapes, trackers, and track points.
     */
    propertyIndex: number;

    /**
     * Returns a 1D, positive speed value equal to the speed
     * at which the property is changing at the default time.
     * This can be used only for spatial properties.
     */
    speed?: number;

    speedAtTime?: (t: number) => number;

    value: T;

    wiggle(
        freq: number,
        amp: number,
        octaves?: number,
        ampMult?: number,
        t?: number
    ): T;
}
