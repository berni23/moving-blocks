import {useGamesStore} from "@/stores/games";
import createGameSprite from "@/Logic/Game/UseCases/CreateGameSprite";
import {gHeight} from "@/Logic/Game/constraints";
import createEnemyWall from "@/Logic/Waves/Services/WaveGenerators/CreateEnemyWall";


export default function customWave() {

    const gameStore = useGamesStore();
    let gameSprite = createGameSprite(); // we pass on arguments -> hence default values are set
    let gameSprite2 = createGameSprite('coin', 2000, gHeight / 3); // we pass on arguments -> hence default values are set


    createEnemyWall();
    createEnemyWall();
    createEnemyWall();



}

