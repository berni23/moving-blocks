import createEnemyWall, {
    createWallNoHole,
    maxNumEnemies
} from "@/Logic/Game/Services/WaveGenerators/ObjectWalls/CreateEnemyWall";
import GameSprite from "@/customTypes/gameSprite";
import {createTwoObjectRowsAndAThirdInTheMiddle} from "@/Logic/Game/Services/WaveGenerators/Others/CreateObjectRow";
import {createPowerUp} from "@/Logic/Game/Services/WaveGenerators/CreateSimpleObjects";
import createDelay from "@/Logic/Game/Services/WaveGenerators/Others/CreateDelay";

export default function createThickWall(position: number | null = null, timeDelay = 100, numWalls = 10, type = 'box', holeType = 'coin') {

    let arraySprites = [] as Array<GameSprite>;
    if (!position) position = Math.round(maxNumEnemies / 2);
    for (let i = 0; i <= numWalls; i++) {
        arraySprites.concat(createEnemyWall(timeDelay, position as number, type, holeType));
    }
    return arraySprites;
}

export function createThickWallNoHole(timeDelay = 100, numWalls = 10, type = 'box') {
    let arraySprites = [] as Array<GameSprite>;
    for (let i = 0; i <= numWalls; i++) {
        arraySprites = arraySprites.concat(createWallNoHole(timeDelay, type));
    }

    return arraySprites;
}

export function spaceTunnel() {
    return createTwoObjectRowsAndAThirdInTheMiddle().concat(
        createPowerUp()).concat(
        createDelay(300)).concat(
        createThickWallNoHole(100, 15)).concat(createDelay(300))
}
