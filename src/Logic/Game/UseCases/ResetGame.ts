import {useGamesStore} from "@/stores/games";


function resetGame(){

    useGamesStore().finishCurrentGame();
}

export default resetGame;
