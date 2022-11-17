import {computed} from "vue";
import {useGamesStore} from "@/stores/games";


export const coinSprite = () => computed(() => `url('images/coins/coin_${useGamesStore().cFrame}.png')`)
export const heartSprite = () => computed(() => `url('images/hearts/heart${useGamesStore().hFrame}.png')`);
export const diamondSprite = () => computed(() => `url('images/diamonds/diamond${useGamesStore().hFrame}.png')`);



