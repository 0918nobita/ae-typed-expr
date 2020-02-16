// Color conversion methods

declare enum HslaType {}
type Hsla = HslaType & [number, number, number, number];

declare enum RgbaType {}
type Rgba = RgbaType & [number, number, number, number];

/**
 * Converts a color in HSLA space to RGBA space.
 * This conversion is the opposite of the conversion performed by the `rgbToHsl` method.
 */
declare function hslToRgb(hslaArray: Hsla): Rgba;

/**
 * Converts a color in RGBA space to HSLA space.
 * The input is an Array of normalized red, green, blue, and alpha channel values,
 * all in the range of 0.0 to 1.0.
 */
declare function rgbToHsl(rgbaArray: Rgba): Hsla;

// Hex to RGB color conversion method

/**
 * Converts a color in hex triplet space to RGB, or in hex quartet space to RGBA space.
 * For hex triplets, alpha defaults to 1.0.
 */
declare function hexToRgb(hexString: string): Rgba;
