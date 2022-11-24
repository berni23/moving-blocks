import initializeGame from "@/Logic/Game/UseCases/InitializeGame";
import {Ref} from "vue";
import countDown from "@/Logic/Game/Utils/countDown";
import GameSprite from "@/customTypes/gameSprite";


function startGame(countDownText: Ref<string | null>,arraySprites:Ref<Array<GameSprite>>) {

    const soundStart = new Audio(require('/src/assets/sounds/start.mp3'))
    soundStart.play().then(r => {});

    countDown(countDownText, ()=>initializeGame(arraySprites));
}

export default startGame;
