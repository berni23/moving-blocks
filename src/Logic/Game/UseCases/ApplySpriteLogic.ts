//logic all the sprites should have in common

import {computed, ref, watch} from "vue";
import {vOthers} from "@/Logic/Game/constraints";
import ElementSprite from "@/customTypes/elementSprite";
import {intToPix} from "@/Logic/Game/Utils/pixelConv";
import {useGamesStore} from "@/stores/games";
import {isCollision} from "@/Logic/Game/Services/IsCollision";

const   applySpriteLogic = (id: number, element: ElementSprite, callbackCollision: Function) => {

    const gameStore = useGamesStore();
    const localIteration = computed(() => shouldAppear ? gameStore.iteration : false);
    const marginLeft = computed(() => intToPix(element.offsetLeft));
    const marginTop = computed(() => intToPix(element.offsetTop));
    const inBoard = computed(() => element.offsetLeft >= 0);
    const elementPlayer = computed(() => gameStore.elementPlayer);
    const elementCollided = ref(false);
    const shouldAppear = computed(() => inBoard.value && !elementCollided.value);

    function loopLogic() {
        if (!shouldAppear.value) return;
        if (!inBoard.value) {
            gameStore.removeNthSprite(id)
            return
        }
        if (element.offsetLeft >= 500) element.offsetLeft = element.offsetLeft - vOthers;
        if (isCollision(element, elementPlayer.value)) {
            elementCollided.value = true;
            callbackCollision();
        }
    }
    watch(() => localIteration.value,  loopLogic);
    return {marginLeft, marginTop, shouldAppear};


}

export default applySpriteLogic;
