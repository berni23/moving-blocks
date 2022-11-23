import createDelay from "@/Logic/Game/Services/WaveGenerators/Others/CreateDelay";
import saveSprite from "@/Logic/Game/Services/Save/SaveSprite";
import createGameSprite from "@/Logic/Game/UseCases/CreateGameSprite";


export function easyWave() {

    saveSprite(createGameSprite()); // we pass on arguments -> hence default values are set
    createDelay(200)
}

export function mediumWave() {
    saveSprite(createGameSprite('coin')); // we pass on arguments -> hence default values are set

    createDelay(200)
}

export function hardWave() {

    saveSprite(createGameSprite('power-up')); // we pass on arguments -> hence default values are set
    createDelay(200)
}
