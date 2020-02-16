interface Transform {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    position: Property<any>;
}

declare class Layer {
    private _: 'layer';

    transform: Transform;
}
