import {maxNumEnemies} from "@/Logic/Game/Services/WaveGenerators/ObjectWalls/CreateEnemyWall";
import createDelayedEnemyWall from "@/Logic/Game/Services/WaveGenerators/ObjectWalls/CreateDelayedEnemyWall";


export default function createSnakeWall(timeDelay = 80, numWalls = 10, type = 'box', holeType = 'coin') {


    let position = Math.round(maxNumEnemies / 2);


    const plus = () => position++;
    const minus = () => position--;

    let callback = plus;


    for (let i = 1; i <= numWalls; i++) {

        callback();
        createDelayedEnemyWall(timeDelay, position, type, holeType);

        if (position == (maxNumEnemies )) callback = minus;
        else if (position == 0) callback = plus


    }
}







