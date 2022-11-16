import countDown from "@/Logic/Game/Utils/countDown";
import initializeGame from "@/Logic/Game/UseCases/InitializeGame";
import customWave from "@/Logic/Waves/customWave";


function startGame() {

    //clear old timers


    //define waves
    customWave();

    //countDown
    const element = document.getElementById('count-down') as HTMLElement;
    const soundStart = document.getElementById('sound-start') as HTMLAudioElement;
    soundStart.play().then(r => {
    });
    countDown(element, initializeGame);
}

export default startGame;
