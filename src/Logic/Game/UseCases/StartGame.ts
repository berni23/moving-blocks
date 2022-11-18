import countDown from "@/Logic/Game/Utils/countDown";
import initializeGame from "@/Logic/Game/UseCases/InitializeGame";
import customWave from "@/Logic/Game/UseCases/CustomWave";
import {Ref, ref} from "vue";
import {useGamesStore} from "@/stores/games";


function startGame(countDownText:  Ref<string|null>) {

    //clean sprites
    useGamesStore().removeSprites();
    useGamesStore().finishLoops();
    //define waves
    customWave();
    // const element = document.getElementById('count-down') as HTMLElement;
    const soundStart = document.getElementById('sound-start') as HTMLAudioElement;
    soundStart.play().then(r => {
    });

    initializeGame();
     // countDown(countDownText, initializeGame);


}

export default startGame;
