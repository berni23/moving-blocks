import createGameSprite from "@/Logic/Game/UseCases/CreateGameSprite";
import {gHeight} from "@/Logic/Game/constraints";


export function createPowerUp(delay: number = 1000, offsetTop = gHeight / 2){
     return [createGameSprite('power-up', delay, offsetTop)];
 }



