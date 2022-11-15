

// from pixels to an integer
export function pixToInt(pixels:string) {
    return Number(pixels.slice(0, pixels.length - 2));
}

// from an integer to pixels
export function intToPix(integer: number) {
    return integer + "px";
}
