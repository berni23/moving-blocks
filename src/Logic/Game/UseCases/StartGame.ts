import initializeGame from "@/Logic/Game/UseCases/InitializeGame";
import customWave from "@/Logic/Game/UseCases/CustomWave";
import {Ref} from "vue";
import countDown from "@/Logic/Game/Utils/countDown";


function startGame(countDownText: Ref<string | null>) {



    //define waves
    customWave();
    // const element = document.getElementById('count-down') as HTMLElement;
    const soundStart =  new Audio(require('/src/assets/sounds/start.mp3'))

    soundStart.play().then(r => {});

    // initializeGame();
    countDown(countDownText, initializeGame);


}

export default startGame;
