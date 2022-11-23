// game constraints

import {intToPix} from "@/Logic/Game/Utils/pixelConv";

//map constraints

export const gHeight: number = 500;
export const marginGame: number = 20;


//player constraints
export const gameWidth = (): number => Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
export const limitRight = (): number => gameWidth() - playerWidth - marginGame * 2;


export const playerWidth: number = 75;
export const playerHeight: number = 40;

export const boxSize: number = 40;
export const coinSize: number = 32;
export const diamondSize: number = boxSize;
export const powerUpSize: number = boxSize;


export const playerWidthPixels: string = intToPix(playerWidth);
export const playerHeightPixels: string = intToPix(playerHeight);
export const boxWidthPixels: string = intToPix(boxSize);
export const diamondWidthPixels: string = intToPix(diamondSize);
export const coinWidthPixels: string = intToPix(coinSize);
export const powerUpWidthPixels: string = intToPix(powerUpSize);


export const timeDamageRecovery: number = 1000 //milliseconds
export const timePowerUp: number = 10000 //milliseconds


export const limitBottom: number = gHeight - playerHeight;
export const initialCoordinates = [0, gHeight / 2];

export const vBox: number = 6
export const vOthers: number = 5;

//keys constraints

export const keysUp = ['ArrowUp', 'w'];
export const keysDown = ['ArrowDown', 's'];
export const keysRight = ['ArrowRight', 'd'];
export const keysLeft = ['ArrowLeft', 'a'];
export const keys = keysUp.concat(keysDown).concat(keysRight).concat(keysLeft);
export const gameInterval: number = 16
;
