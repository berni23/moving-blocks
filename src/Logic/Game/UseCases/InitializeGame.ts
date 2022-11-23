import {useGamesStore} from "@/stores/games";
import addKeyDetectors from "@/Logic/Game/UseCases/AddKeyDetectors";
import GameSprite from "@/customTypes/gameSprite";


const initializeGame = (waveCallback: Function) => {

    const gameStore = useGamesStore();
    waveCallback();
    let arraySprites = Object.assign([],gameStore.arraySprites) as Array<GameSprite>
    const spritePusher = () => {

        if (!gameStore.currentGame) return;
        if (!arraySprites.length) {
            arraySprites = Object.assign([],gameStore.arraySprites) as Array<GameSprite>;

        }
        let gameSprite = arraySprites.shift() as GameSprite;
        if (gameSprite.component != 'timer') gameStore.displaySprite(gameSprite);

        setTimeout(spritePusher, arraySprites[0] ? arraySprites[0].time : 100);
    }
    gameStore.startCurrentGame();
    gameStore.initializeLoops();
    addKeyDetectors();
    spritePusher();
}
export default initializeGame
