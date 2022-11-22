import createGameSprite from "@/Logic/Game/UseCases/CreateGameSprite";
import {gHeight} from "@/Logic/Game/constraints";

import createSnakeWall from "@/Logic/Game/Services/WaveGenerators/ObjectWalls/CreateSnakeWall";
import saveSprite from "@/Logic/Game/Services/Save/SaveSprite";


export default function customWave() {

    saveSprite(createGameSprite()); // we pass on arguments -> hence default values are set
    saveSprite(createGameSprite('coin', 2000, gHeight / 3)); // we pass on arguments -> hence default values are set
    createSnakeWall();
    // createDelay(200)
    // createObjectsInRandPosition(40, 50)
    // createRandomWalls();
    //
    // createDelay(200)
    // createSnakeWall(80,10,'coin','box')
    // createObjectsInRandPosition(50, 120)
    // createDelay(200)
    // createObjectsInRandPosition(20, 60)
    //
    // createDelay(200)
    // duplicateSpritesAndShuffle();
    // // createRandomWalls();
    // createRandomWalls();
    // createRandomWalls();



}

