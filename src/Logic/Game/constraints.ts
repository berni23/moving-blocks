// game constraints

import {pixToInt} from "@/Logic/Game/Utils/pixelConv";
import Mode from "@/customTypes/mode";

//map constraints

export const gHeight: number = 500;
export const marginGame: number = 20;


//player constraints
export const gameWidth = (): number => Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
export const limitRight = (): number => gameWidth() - boxSize - marginGame * 2;
export const boxWidthPixels: string = '50px';
export const boxSize: number = pixToInt(boxWidthPixels);
export const timeDamageRecovery: number = 1000 //milliseconds
export const timePowerUp: number = 6000 //milliseconds
export const limitBottom: number = gHeight - boxSize;
export const initialCoordinates = [0, gHeight / 2];
export const bH2: number = boxSize / 2
export const vBox: number = 7;


//sprite constraints
export const coinWidthPixels: string = '32px';
export const diamondWidthPixels: string = boxWidthPixels;

export const coinSize: number = pixToInt(coinWidthPixels);
export const diamondSize: number = pixToInt(diamondWidthPixels);
export const cH2: number = coinSize / 2
export const dH2: number = diamondSize / 2
export const vOthers: number = 5;


//keys constraints

export const keysUp = ['ArrowUp', 'w'];
export const keysDown = ['ArrowDown', 's'];
export const keysRight = ['ArrowRight', 'd'];
export const keysLeft = ['ArrowLeft', 'a'];

export const keys = keysUp.concat(keysDown).concat(keysRight).concat(keysLeft);


//game constraints

export const gameInterval: number = 16; // gameInterval
export const arrayModes = [{name: 'easy', maxLives: 5} as Mode, {name: 'medium', maxLives: 3} as Mode, {
    name: 'hard',
    maxLives: 1
} as Mode,] as Array<Mode>


