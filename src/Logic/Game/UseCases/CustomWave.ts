import {useGamesStore} from "@/stores/games";
import createGameSprite from "@/Logic/Game/UseCases/CreateGameSprite";
import {gHeight} from "@/Logic/Game/constraints";

import createSnakeWall from "@/Logic/Game/Services/WaveGenerators/ObjectWalls/CreateSnakeWall";


export default function customWave() {

    const gameStore = useGamesStore();
    let gameSprite = createGameSprite(); // we pass on arguments -> hence default values are set
    let gameSprite2 = createGameSprite('coin', 2000, gHeight / 3); // we pass on arguments -> hence default values are set

    createSnakeWall();

    // createRandomWalls();
    // createRandomWalls();
    // createRandomWalls();
    // createRandomWalls();s


}

