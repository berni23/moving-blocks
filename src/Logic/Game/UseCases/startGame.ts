import countDown from "@/Logic/Game/Utils/countDown";
import initializeGame from "@/Logic/Game/UseCases/InitializeGame";


function startGame() {
    const element = document.getElementById('count-down') as HTMLElement;
    const soundStart = document.getElementById('sound-start') as HTMLAudioElement;
    soundStart.play().then(r =>{} );
    countDown(element, initializeGame);
}

export default  startGame;
