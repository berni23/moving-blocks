import {useGamesStore} from "@/stores/games";
import saveArraySprites from "@/Logic/Game/Services/Save/SaveArraySprites";
import {shuffleArray} from "@/Logic/Game/Utils/arrayUtils";


export default function duplicateSpritesAndShuffle() {


    const gameStore = useGamesStore();

    let arraySprites = [...gameStore.arraySprites]
    arraySprites = shuffleArray(arraySprites);
    saveArraySprites(arraySprites);


}
