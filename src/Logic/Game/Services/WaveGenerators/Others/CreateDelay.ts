import createGameSprite from "@/Logic/Game/UseCases/CreateGameSprite";


const createDelay = (delay: number = 3000) => [createGameSprite('coin', delay)]

export default createDelay;
