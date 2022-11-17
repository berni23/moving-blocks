import {useGamesStore} from "@/stores/games";
import addKeyDetectors from "@/Logic/Game/UseCases/AddKeyDetectors";
import GameSprite from "@/customTypes/gameSprite";


const initializeGame = () => {

    const gameStore = useGamesStore();

    gameStore.finishLoops();

    const spritePusher = (arraySprites: Array<GameSprite>) => {
        let gameSprite = arraySprites.shift() as GameSprite;
        gameStore.displaySprite(gameSprite);
        if (!arraySprites.length) return;
        setTimeout(() => spritePusher(arraySprites), arraySprites[0].time);
    }

    gameStore.startCurrentGame();
    gameStore.initializeLoops();
    addKeyDetectors();

    spritePusher(gameStore.arraySprites);


}
export default initializeGame
