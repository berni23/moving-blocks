import {useGamesStore} from "@/stores/games";
import addKeyDetectors from "@/Logic/Game/UseCases/AddKeyDetectors";
import GameSprite from "@/customTypes/gameSprite";


const initializeGame = () => {

    const gameStore = useGamesStore();
    const spritePusher = (arraySprites: Array<GameSprite>) => {

        if (!arraySprites.length || !gameStore.currentGame) return;
        let gameSprite = arraySprites.shift() as GameSprite;
        if (gameSprite.component != 'timer') gameStore.displaySprite(gameSprite);

        setTimeout(() => spritePusher(arraySprites), arraySprites[0]?arraySprites[0].time:100);
    }

    gameStore.startCurrentGame();
    gameStore.initializeLoops();
    addKeyDetectors();

    spritePusher(gameStore.arraySprites);


}
export default initializeGame
