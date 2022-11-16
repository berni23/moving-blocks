<template>

  <div v-if="inBoard" class="box blue-box" :style="{'marginLeft':marginLeft,'marginTop':marginTop}"></div>
</template>

<script lang="ts">

import {computed, defineComponent, reactive, watch} from 'vue';
import {useGamesStore} from "@/stores/games";
import {bH2, gameWidth, vOthers} from "@/Logic/Game/constraints";
import {intToPix} from '@/Logic/Game/Utils/pixelConv';
import ElementSprite from '@/customTypes/elementSprite';
import {isCollision} from "@/Logic/Game/Services/IsCollision";

export default defineComponent({
  name: "box",
  props: ['offsetTop', 'id'],

  setup(props, {emit}) {
    const gameStore = useGamesStore();

    // const gWidth = computed(gameWidth);
    const element = reactive({offsetTop: props.offsetTop, offsetLeft: gameWidth(), radius: bH2} as ElementSprite);
    const marginLeft = computed(() => intToPix(element.offsetLeft));
    const marginTop = computed(() => intToPix(element.offsetTop));
    const inBoard = computed(() => element.offsetLeft >= 0);
    const elementPlayer = computed(() => gameStore.elementPlayer);

    const collision = computed(() => isCollision(element, elementPlayer.value));

    function applySpriteLogic() {
      if (!inBoard.value) {
        gameStore.removeNthSprite(props.id)
        return
      }
      if (element.offsetLeft >= 500) element.offsetLeft = element.offsetLeft - vOthers;
      if (!gameStore.isBouncingDamage && isCollision(element, elementPlayer.value)) {
        gameStore.applyDamage();
        gameStore.removeNthSprite(props.id)
      }
    }

    watch(() => gameStore.iteration, applySpriteLogic);
    return {marginLeft, marginTop, inBoard};

  }
});
</script>

<style lang="scss">


@import './src/assets/scss/colors';

</style>
