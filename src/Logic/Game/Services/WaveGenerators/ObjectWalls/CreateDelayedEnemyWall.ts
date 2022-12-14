import {boxSize} from "@/Logic/Game/constraints";
import CreateGameSprite from "@/Logic/Game/UseCases/CreateGameSprite";
import {maxNumEnemies} from "@/Logic/Game/Services/WaveGenerators/ObjectWalls/CreateEnemyWall";
import GameSprite from "@/customTypes/gameSprite";

//hole position must be a number from 1 to 10;
export default function createDelayedEnemyWall(timeDelay = 100, holePosition = 5, type = 'box', holeType = 'coin') {
    holePosition = holePosition % 11;
    let positionHole = Math.max(Math.round((maxNumEnemies) * holePosition / 10), 1);
    let nextPosition = 15;
    let arraySprites = [] as Array<GameSprite>;
    for (let i = 0; i <= maxNumEnemies; i++) {
        let localTimeDelay = (i == maxNumEnemies) ? timeDelay * 2 : timeDelay;
        if (i == positionHole) {
            let sprite = CreateGameSprite(holeType, localTimeDelay, nextPosition + 15)
            arraySprites.push(sprite);
            nextPosition += (boxSize + 35);
        } else {
            let sprite = CreateGameSprite(type, localTimeDelay, nextPosition);
            arraySprites.push(sprite);
            nextPosition += (boxSize + 5);
        }
    }
    return arraySprites.concat([...arraySprites].reverse());
}
