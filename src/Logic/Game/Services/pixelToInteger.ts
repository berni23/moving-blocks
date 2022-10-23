
export default function pixelToInteger(pixels: string):number {
    return Number(pixels.slice(0, pixels.length - 2));
}
