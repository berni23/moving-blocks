import {useGamesStore} from "@/stores/games";
import createGameSprite from "@/Logic/Game/UseCases/CreateGameSprite";
import {gHeight} from "@/Logic/Game/constraints";


export default function customWave() {

    const gameStore = useGamesStore();
    let gameSprite = createGameSprite(); // we pass on arguments -> hence default values are set
    let gameSprite2 = createGameSprite('coin', 2000, gHeight / 3); // we pass on arguments -> hence default values are set
    let gameSprite3 = createGameSprite('coin', 2000, gHeight / 3); // we pass on arguments -> hence default values are set
    let gameSprite4 = createGameSprite('power-up', 2000, gHeight / 4); // we pass on arguments -> hence default values are set
    gameStore.pushSprite(gameSprite);
    gameStore.pushSprite(gameSprite2);
    gameStore.pushSprite(gameSprite3);
    gameStore.pushSprite(gameSprite4);

}

