import createGameSprite from "@/Logic/Game/UseCases/CreateGameSprite";
import {getRandomInt} from "@/Logic/Game/Utils/randomNumberGenerators";
import {gHeight, marginGame} from "@/Logic/Game/constraints";
import GameSprite from "@/customTypes/gameSprite";


export default function createObjectsInRandPosition(number = 1, time = 100, type = 'coin') {

    let arraySprites = [] as Array<GameSprite>;
    for (let i = 0; i < number; i++) {
        arraySprites.push(createGameSprite(type, time, randomYPosition()))
    }
    return arraySprites;

}


export function randomYPosition() {

    return getRandomInt(0, Math.floor(gHeight - 2 * marginGame));

}
