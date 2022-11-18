import GameSprite from "@/customTypes/gameSprite";
import {useGamesStore} from "@/stores/games";
const saveSprite = (gameSprite: GameSprite) => useGamesStore().saveSprite(gameSprite);
export default saveSprite;


