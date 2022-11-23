import {gHeight} from "@/Logic/Game/constraints";
import createObjectRow, {
    createAlternateObjectRow,
    createTwoObjectRows, createTwoObjectRowsAndAThirdInTheMiddle
} from "@/Logic/Game/Services/WaveGenerators/Others/CreateObjectRow";
import duplicateSpritesAndShuffle from "@/Logic/Game/Services/WaveGenerators/Others/DuplicateSpritesAndShuffle";


export default function customWave() {



    createTwoObjectRowsAndAThirdInTheMiddle();
    createTwoObjectRows('box',10,[1/5*gHeight,4/5*gHeight])
    createObjectRow()
    createObjectRow('coin', 15, gHeight / 3.5)
    createAlternateObjectRow(['coin', 'box'], 400)
    // createObjectRow()
    createTwoObjectRows('coin', 12, [gHeight / 6, gHeight / 1.5])

    duplicateSpritesAndShuffle();





    // saveSprite(createGameSprite()); // we pass on arguments -> hence default values are set
    // saveSprite(createGameSprite('coin', 2000, gHeight / 3)); // we pass on arguments -> hence default values are set
    // createSnakeWall();
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

