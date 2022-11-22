import createEnemyWall, {maxNumEnemies} from "@/Logic/Game/Services/WaveGenerators/ObjectWalls/CreateEnemyWall";

export default function createThickWall(position: number | null = null, timeDelay = 100, numWalls = 10,type='box',holeType='coin') {

    if (!position) position = Math.round(maxNumEnemies / 2);
    for (let i = 0; i <= numWalls; i++) {
        createEnemyWall(timeDelay, position as number,type,holeType);
    }
}
