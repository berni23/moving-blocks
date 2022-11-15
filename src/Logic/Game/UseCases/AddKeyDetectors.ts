/* detection of W/A/S/D keys */

import {useGamesStore} from "@/stores/games";


const detectKey = (e: KeyboardEvent) => {

    const gameStore = useGamesStore();
    gameStore.setCurrentKey(e.key)
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
