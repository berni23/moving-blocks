import {useGamesStore} from "@/stores/games";

export default function removeSprite(id: number) {
    useGamesStore().removeNthSprite(id);
}
