import {useGamesStore} from "@/stores/games";
import addKeyDetectors from "@/Logic/Game/UseCases/AddKeyDetectors";
import GameSprite from "@/customTypes/gameSprite";
import waveOfMode, {mediumWave} from "@/Logic/Game/Services/WaveGenerators/Waves";


const initializeGame = (modeString: string) => {

    const gameStore = useGamesStore();
    console.log('modes',gameStore.modes)
    gameStore.removeSprites();
    waveOfMode(modeString)
    let arraySprites = Object.assign([], gameStore.arraySprites) as Array<GameSprite>
    const spritePusher = () => {

        if (!gameStore.currentGame) {
            gameStore.removeSprites();
            return;
        }
        if (!arraySprites.length) {
            arraySprites = Object.assign([], gameStore.arraySprites) as Array<GameSprite>;

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
