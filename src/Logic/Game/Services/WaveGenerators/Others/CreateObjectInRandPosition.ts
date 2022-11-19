import saveSprite from "@/Logic/Game/Services/Save/SaveSprite";
import createGameSprite from "@/Logic/Game/UseCases/CreateGameSprite";
import {getRandomInt} from "@/Logic/Game/Utils/randomNumberGenerators";
import {dom} from "quasar";
import {gHeight, marginGame} from "@/Logic/Game/constraints";


export default function createObjectsInRandPosition(number = 1, time = 100, type = 'coin') {

    for (let i = 0; i < number; i++) {
        saveSprite(createGameSprite(type, time,randomYPosition()))
    }

}


export function  randomYPosition() {

    return  getRandomInt(0, Math.floor(gHeight - 2 * marginGame));

}
