import initializeGame from "@/Logic/Game/UseCases/InitializeGame";
import {Ref} from "vue";
import countDown from "@/Logic/Game/Utils/countDown";


function startGame(countDownText: Ref<string | null>) {
    const soundStart = new Audio(require('/src/assets/sounds/start.mp3'))
    soundStart.play().then(r => {
    });
    countDown(countDownText, initializeGame);

}

export default startGame;
