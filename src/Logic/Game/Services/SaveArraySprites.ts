import GameSprite from "@/customTypes/gameSprite";
import {useGamesStore} from "@/stores/games";

const saveArraySprites = (arraySprites: Array<GameSprite>) => useGamesStore().saveArraySprites(arraySprites);

export default saveArraySprites;
