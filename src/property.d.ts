declare class Property<T> {
    private _: 'property';

    value: T;

    wiggle(
        freq: number,
        amp: number,
        octaves?: number,
        ampMult?: number,
        t?: number
    ): T;
}
