import Game from "@/customTypes/game";
import {useGamesStore} from "@/stores/games";


const clearFormerGameAndSetNewAsCurrent = (game: Game) => {
    const gameStore = useGamesStore();
    gameStore.finishCurrentGame();
    game.id = gameStore.highestId + 1;
    gameStore.setCurrentGame(game);
}


export default clearFormerGameAndSetNewAsCurrent;
