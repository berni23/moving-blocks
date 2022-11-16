// game constraints

import {pixToInt} from "@/Logic/Game/Utils/pixelConv";
import Mode from "@/customTypes/mode";

export const gHeight: number = 500;
export const boxWidthPixels: string = '50px';
export const boxSize: number = pixToInt(boxWidthPixels);
export const marginGame: number = 20;
export const limitBottom: number = gHeight - boxSize ;
export const bH2: number = boxSize / 2
export const vBox: number = 7;
export const vOthers: number = 5;
export const gameInterval: number = 16; // gameInterval

export const boxIniMarginLeft: string = "750px";
export const boxIniMarginTop: string = "250px";

export const keysUp = ['ArrowUp', 'w'];
export const keysDown = ['ArrowDown', 's'];
export const keysRight = ['ArrowRight', 'd'];
export const keysLeft = ['ArrowLeft', 'a'];

export const keys = keysUp.concat(keysDown).concat(keysRight).concat(keysLeft);

export const arrayModes = [{name: 'easy', maxLives: 5} as Mode, {name: 'medium', maxLives: 3} as Mode, {
    name: 'hard',
    maxLives: 1
} as Mode,] as Array<Mode>


export const gameWidth = ():number=> Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
export const limitRight = (): number=> gameWidth() - boxSize - marginGame*2;
