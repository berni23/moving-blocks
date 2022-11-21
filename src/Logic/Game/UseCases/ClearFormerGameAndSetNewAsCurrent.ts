import Game from "@/customTypes/game";
import {useGamesStore} from "@/stores/games";


const clearFormerGameAndSetNewAsCurrent = (game: Game) => {
    const gameStore = useGamesStore();
    gameStore.finishCurrentGame();
    gameStore.setCurrentGame(game);
}


export default clearFormerGameAndSetNewAsCurrent;
