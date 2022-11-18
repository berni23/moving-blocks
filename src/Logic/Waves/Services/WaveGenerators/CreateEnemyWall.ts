import {boxSize, gHeight, marginGame} from "@/Logic/Game/constraints";
import CreateGameSprite from "@/Logic/Game/UseCases/CreateGameSprite";
import saveSprite from "@/Logic/Waves/Services/SaveSprite";


const maxNumEnemies = Math.max(Math.floor((gHeight - marginGame * 2) / (boxSize + 5))-1,1);


//hole position must be a number from 1 to 10;
export default function createEnemyWall(timeDelay = 0, holePosition = 5) {


    console.log('max num enemies', maxNumEnemies);
    holePosition = holePosition % 11;

    let lastPosition = 0;
    let positionHole = Math.max(Math.round((maxNumEnemies) * holePosition / 10), 1);
    for (let i = 0; i <= maxNumEnemies; i++) {


        if (i == positionHole) {


            saveSprite(CreateGameSprite('coin', timeDelay, (lastPosition) * (boxSize + 5)));
            lastPosition += 2;
            continue;
        }


        saveSprite(CreateGameSprite('box', timeDelay, lastPosition * (boxSize + 5)));
        lastPosition++
    }
}
