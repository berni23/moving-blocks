import {boxSize, gHeight, marginGame} from "@/Logic/Game/constraints";
import CreateGameSprite from "@/Logic/Game/UseCases/CreateGameSprite";
import GameSprite from "@/customTypes/gameSprite";

export const maxNumEnemies = Math.max(Math.floor((gHeight - marginGame * 2) / (boxSize + 5)) - 1, 1);
//hole position must be a number from 1 to 10;
export default function createEnemyWall(timeDelay = 100, holePosition = 5, type = 'box', holeType = 'coin') {

    let arraySprites = [] as Array<GameSprite>;
    holePosition = holePosition % 11;
    let positionHole = Math.max(Math.round((maxNumEnemies) * holePosition / 10), 1);
    let nextPosition = 15;
    for (let i = 0; i <= maxNumEnemies; i++) {
        if (i == positionHole) {
            arraySprites.push(CreateGameSprite(holeType, (i == 0) ? timeDelay : 0, nextPosition + 15));
            nextPosition += (boxSize + 35);
        } else {
            arraySprites.push(CreateGameSprite(type, (i == 0) ? timeDelay : 0, nextPosition));
            nextPosition += (boxSize + 5);
        }
    }
    return arraySprites;
}
export  function createWallNoHole(timeDelay = 100, type = 'box') {
    let arraySprites = [] as Array<GameSprite>;
    let nextPosition = 15;
    for (let i = 0; i <= maxNumEnemies; i++) {
            arraySprites.push(CreateGameSprite(type,  (i == 0) ? timeDelay : 0, nextPosition));
            nextPosition += (boxSize + 5);
    }
    return arraySprites;
}
