import {useGamesStore} from "@/stores/games";

const initializeGame = () => {

    const gameStore = useGamesStore();
    gameStore.startCurrentGame();
    gameStore.initializeLoops();


}
export default initializeGame
