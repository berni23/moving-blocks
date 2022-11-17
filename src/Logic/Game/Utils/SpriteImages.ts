import {computed} from "vue";
import {useGamesStore} from "@/stores/games";


export const coinSprite = () => computed(() => `url('images/coin_${useGamesStore().cFrame}.png')`)
export const heartSprite = () => computed(() => `url('images/heart${useGamesStore().hFrame}.png')`);





