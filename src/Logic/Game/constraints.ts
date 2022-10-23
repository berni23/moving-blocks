// game constraints
import pixelToInteger from "@/Logic/Game/Services/pixelToInteger";

export const gWidth: number = 1500;
export const gHeight: number = 500;
export const boxWidth: string = '50px';
export const boxSize: number = pixelToInteger(boxWidth);
export const marginGame: number = 5;
export const limitBottom: number = gHeight - boxSize - marginGame;
export const limitRight: number = gWidth - boxSize - marginGame;
export const bH2: number = boxSize / 2
export const vBox: number = 7;
export const vOthers: number = 5;
export const gameInt: number = 16; // gameInterval

export const boxIniMarginLeft: string = "750px";
export const boxIniMarginTop: string = "250px";
