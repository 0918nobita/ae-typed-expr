interface Group {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    position: Property<any>;
}

declare class Layer {
    private _: 'layer';

    readonly transform: Group;
}
