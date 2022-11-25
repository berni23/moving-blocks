import createGameSprite from "@/Logic/Game/UseCases/CreateGameSprite";
import GameSprite from "@/customTypes/gameSprite";


const createDelay = (delay: number = 3000) => [createGameSprite('coin', delay)]

export default createDelay;


export const createDelays = (num: number = 10, delay: number = 3000) => {
    let array = [] as Array<GameSprite>;
    for (let i = 0; i < num; i++) {
        array.concat(createDelay(delay));
    }
    return array;
}

