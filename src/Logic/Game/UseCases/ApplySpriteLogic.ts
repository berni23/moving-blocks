//logic all the sprites should have in common

import {computed, ref, watch} from "vue";
import {vOthers} from "@/Logic/Game/constraints";
import ElementSprite from "@/customTypes/elementSprite";
import {intToPix} from "@/Logic/Game/Utils/pixelConv";
import {useGamesStore} from "@/stores/games";
import {isCollision} from "@/Logic/Game/Services/Conditions/IsCollision";
import removeSprite from "@/Logic/Game/UseCases/removeSprite";

const applySpriteLogic = (id: number, element: ElementSprite, callbackCollision: Function) => {

    const gameStore = useGamesStore();
    const localIteration = computed(() => shouldAppear ? gameStore.iteration : false);
    const marginLeft = computed(() => intToPix(element.offsetLeft));
    const marginTop = computed(() => intToPix(element.offsetTop));
    const inBoard = computed(() => element.offsetLeft >= 0);
    const elementPlayer = computed(() => gameStore.elementPlayer);
    const elementCollided = ref(false);
    const shouldAppear = computed(() => inBoard.value && !elementCollided.value);
    const  unwatch = watch(() => localIteration.value, loopLogic);
    function loopLogic() {
        if (!inBoard.value || !shouldAppear.value) {
            removeSprite(id)
            unwatch();
            return
        }
        if (!shouldAppear.value) return;
        element.offsetLeft = element.offsetLeft - vOthers;
        if (isCollision(element, elementPlayer.value)) {
            elementCollided.value = true;
            callbackCollision();
        }
    }
    return {marginLeft, marginTop, shouldAppear};
}

export default applySpriteLogic;
