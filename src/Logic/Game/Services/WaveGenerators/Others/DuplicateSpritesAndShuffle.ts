import {shuffleArray} from "@/Logic/Game/Utils/arrayUtils";
import GameSprite from "@/customTypes/gameSprite";
import {boxSize} from "@/Logic/Game/constraints";


const conditionOffset = (offset1: number, offset2: number) => {
    return Math.abs(offset1 - offset2) < 2 * boxSize

}
export default function duplicateSpritesAndShuffle(arraySprites: Array<GameSprite>) {


    let shuffledSprites = shuffleArray([...arraySprites]);
    let newArray = [] as Array<GameSprite>;
    shuffledSprites.forEach((sprite, i) => {
        sprite = Object.assign({}, sprite) as GameSprite;
        if (arraySprites[i - 1] && conditionOffset(sprite.offsetTop, arraySprites[i - 1].offsetTop) && sprite.time < 120) sprite.time = 120;
        newArray.push(sprite);
    });
    return newArray;
}
