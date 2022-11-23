import createDelay from "@/Logic/Game/Services/WaveGenerators/Others/CreateDelay";
import saveSprite from "@/Logic/Game/Services/Save/SaveSprite";
import createGameSprite from "@/Logic/Game/UseCases/CreateGameSprite";
import createObjectRow, {
    createAlternateObjectRow,
    createTwoObjectRows,
    createTwoObjectRowsAndAThirdInTheMiddle
} from "@/Logic/Game/Services/WaveGenerators/Others/CreateObjectRow";
import {gHeight} from "@/Logic/Game/constraints";
import duplicateSpritesAndShuffle from "@/Logic/Game/Services/WaveGenerators/Others/DuplicateSpritesAndShuffle";
import createSnakeWall from "@/Logic/Game/Services/WaveGenerators/ObjectWalls/CreateSnakeWall";
import createObjectsInRandPosition from "@/Logic/Game/Services/WaveGenerators/Others/CreateObjectInRandPosition";
import createRandomWalls from "@/Logic/Game/Services/WaveGenerators/ObjectWalls/CreateRandomWalls";
import {createPowerUp} from "@/Logic/Game/Services/WaveGenerators/CreateSimpleObjects";


export function easyWave() {
    createTwoObjectRows('box', 10, [1 / 5 * gHeight, 4 / 5 * gHeight])
    createObjectRow()
    createObjectRow('coin', 15, gHeight / 3.5)
    createAlternateObjectRow(['coin', 'box'], 400)
    createObjectRow()
    createTwoObjectRows('coin', 12, [gHeight / 6, gHeight / 1.5])
    createTwoObjectRowsAndAThirdInTheMiddle();
    duplicateSpritesAndShuffle();

}

export function mediumWave() {
    saveSprite(createGameSprite('coin')); // we pass on arguments -> hence default values are set

    createDelay(200)
}

export function hardWave() {

    saveSprite(createGameSprite()); // we pass on arguments -> hence default values are set
    saveSprite(createGameSprite('coin', 2000, gHeight / 3)); // we pass on arguments -> hence default values are set
    createSnakeWall();
    createDelay(200)
    createObjectsInRandPosition(40, 50)
    createRandomWalls();
    createDelay(200)
    createSnakeWall(80, 10, 'coin', 'box')
    createObjectsInRandPosition(50, 120)
    createDelay(200)
    createObjectsInRandPosition(20, 60)
    createDelay(200)
    duplicateSpritesAndShuffle();
    createRandomWalls();
    createRandomWalls();
    createRandomWalls();
    createPowerUp();
}
