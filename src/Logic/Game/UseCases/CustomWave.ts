import createGameSprite from "@/Logic/Game/UseCases/CreateGameSprite";
import {gHeight} from "@/Logic/Game/constraints";

import createSnakeWall from "@/Logic/Game/Services/WaveGenerators/ObjectWalls/CreateSnakeWall";
import createRandomWalls from "@/Logic/Game/Services/WaveGenerators/ObjectWalls/CreateRandomWalls";
import saveSprite from "@/Logic/Game/Services/Save/SaveSprite";
import createObjectsInRandPosition from "@/Logic/Game/Services/WaveGenerators/Others/CreateObjectInRandPosition";
import createDelay from "@/Logic/Game/Services/WaveGenerators/Others/CreateDelay";
import duplicateSpritesAndShuffle from "@/Logic/Game/Services/WaveGenerators/Others/DuplicateSpritesAndShuffle";


export default function customWave() {

    saveSprite(createGameSprite()); // we pass on arguments -> hence default values are set
    saveSprite(createGameSprite('coin', 2000, gHeight / 3)); // we pass on arguments -> hence default values are set
    // createSnakeWall();
    // createObjectsInRandPosition(40, 50)
    // createRandomWalls();
    // createSnakeWall(80,10,'coin','box')
    // createObjectsInRandPosition(50, 120)
    // createObjectsInRandPosition(20, 60)
    //
    //
    // duplicateSpritesAndShuffle();
    // // createRandomWalls();
    // createRandomWalls();
    // createRandomWalls();s


}

