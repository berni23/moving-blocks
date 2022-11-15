import {useGamesStore} from "@/stores/games";
import addKeyDetectors from "@/Logic/Game/UseCases/AddKeyDetectors";

const initializeGame = () => {

    const gameStore = useGamesStore();
    gameStore.startCurrentGame();
    gameStore.initializeLoops();
    addKeyDetectors()


}
export default initializeGame
