import {useGamesStore} from "@/stores/games";
import saveArraySprites from "@/Logic/Game/Services/Save/SaveArraySprites";
import {shuffleArray} from "@/Logic/Game/Utils/arrayUtils";
import GameSprite from "@/customTypes/gameSprite";
import {boxSize} from "@/Logic/Game/constraints";


const conditionOffset = (offset1: number, offset2: number) => {

    return Math.abs(offset1 - offset2) < 2*boxSize

}
export default function duplicateSpritesAndShuffle() {

    const gameStore = useGamesStore();
    let arraySprites = [...gameStore.arraySprites]
    arraySprites = shuffleArray(arraySprites);

    let newArray = [] as Array<GameSprite>;
    arraySprites.forEach((sprite, i) => {

        sprite = Object.assign({}, sprite) as GameSprite;

        console.log(i);
        if (arraySprites[i -1] && conditionOffset(sprite.offsetTop, arraySprites[i - 1].offsetTop) && sprite.time < 120) {

            console.log('sprites near!');
            console.log(sprite);
            console.log(arraySprites[i + 1]);
            sprite.time = 120;

        }


        newArray.push(sprite);

    });
    saveArraySprites(newArray);


}
