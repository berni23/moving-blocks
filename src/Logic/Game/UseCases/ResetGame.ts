import {useGamesStore} from "@/stores/games";
import {removeKeyDetectors} from "@/Logic/Game/UseCases/AddKeyDetectors";


function resetGame() {
    let store = useGamesStore()
    store.resetGame();
    removeKeyDetectors();
}

export default resetGame;
