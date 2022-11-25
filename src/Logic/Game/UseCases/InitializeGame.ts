import {useGamesStore} from "@/stores/games";
import addKeyDetectors from "@/Logic/Game/UseCases/AddKeyDetectors";
import GameSprite from "@/customTypes/gameSprite";
import {Ref} from "vue";

const initializeGame = (arraySprites: Ref<Array<GameSprite>>) => {
    const gameStore = useGamesStore();
    let localArraySprites = Object.assign([], arraySprites.value) as Array<GameSprite>
    const spritePusher = () => {
        if (!gameStore.currentGame) return;

        if (!localArraySprites.length) localArraySprites = Object.assign([], arraySprites.value) as Array<GameSprite>;

        let gameSprite = localArraySprites.shift() as GameSprite;
        gameStore.displaySprite(gameSprite);

        setTimeout(spritePusher, localArraySprites[0] ? localArraySprites[0].time : 100);
    }
    gameStore.startCurrentGame();
    gameStore.initializeLoops();
    addKeyDetectors();
    spritePusher();
}
export default initializeGame
