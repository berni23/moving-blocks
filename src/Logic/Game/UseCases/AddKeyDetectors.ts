/* detection of W/A/S/D keys */

import {keys} from "@/Logic/Game/constraints";
import {useGamesStore} from "@/stores/games";


const detectKey = (e: KeyboardEvent) => {

    if (keys.includes(e.key)) useGamesStore().setCurrentKey(e.key)
}

const removeKey = (e: KeyboardEvent) => {
    const gameStore = useGamesStore();
    if (gameStore.currentKey == e.key) gameStore.removeCurrentKey()

}


const addKeyDetectors = () => {
    document.onkeydown = detectKey;
    document.onkeyup = removeKey;

}

export default addKeyDetectors;
