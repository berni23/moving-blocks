import saveSprite from "@/Logic/Game/Services/Save/SaveSprite";
import createGameSprite from "@/Logic/Game/UseCases/CreateGameSprite";


const createDelay = (delay: number = 3000) => saveSprite(createGameSprite('delay', delay))

export default createDelay;
