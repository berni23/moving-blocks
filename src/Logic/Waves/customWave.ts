import {useGamesStore} from "@/stores/games";
import createGameSprite from "@/Logic/Game/UseCases/CreateGameSprite";
import box from "@/components/Game/Sprites/box.vue";
import {gHeight} from "@/Logic/Game/constraints";


export default function customWave() {
    let gameStore = useGamesStore()
    let gameSprite = createGameSprite(); // we pass on arguments -> hence default values are set
    gameStore.pushSprite(gameSprite);
    let gameSprite2 = createGameSprite(box, 200, gHeight / 3); // we pass on arguments -> hence default values are set
    gameStore.pushSprite(gameSprite2);

}

