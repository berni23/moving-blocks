<template>
  <div id="me" class="player box" :style="{'marginLeft':marginLeft,'marginTop':marginTop}"></div>
</template>

<script lang="ts">

import {computed, defineComponent, watch} from 'vue';
import {useGamesStore} from "@/stores/games";
import {limitBottom, vBox} from "@/Logic/Game/constraints";

export default defineComponent({
  name: "player",

  setup(props, {emit}) {
    const gameStore = useGamesStore();
    const iteration = computed(() => gameStore.iteration);

    console.log('offsetLeft', gameStore.offsetLeft);
    const posLeft = computed(() => gameStore.offsetLeft);
    const posTop = computed(() => gameStore.offsetTop);
    const currentKey = computed(() => gameStore.currentKey);

    function applySpriteLogic() {
      // console.log('applying sprite logic', gameStore.currentKey);
      // console.log('top', gameStore.offsetTop);
      // console.log('left', gameStore.offsetLeft)
      if (!gameStore.currentKey) {

        // console.log('nil');
        return
      }
      if (gameStore.goUp) {
        // console.log('up');

        gameStore.setOffsetTop(Math.max(posTop.value - vBox,0));
        return;
      }

      if (gameStore.goDown) {

         console.log('down');

        gameStore.setOffsetTop(Math.min(posTop.value + vBox,limitBottom));
        return
      }

      if (gameStore.goLeft) {

        let newOffset = Math.max(posLeft.value - vBox,0);
        gameStore.setOffsetLeft(newOffset);

        return
      }

      if (gameStore.goRight) {
        // console.log('right');
        gameStore.setOffsetLeft(Math.min(posLeft.value + vBox));
        return
      }
    }

    const marginLeft = computed(() => posLeft.value.toString() + 'px');
    const marginTop = computed(() => posTop.value.toString() + 'px');
    watch(() => gameStore.iteration, applySpriteLogic);
    return {marginLeft, marginTop};

  }
});
</script>

<style lang="scss">


@import './src/assets/scss/colors';

.player {
  position: absolute !important;
  z-index: 10;
  width: 50px;
  height: 50px;
  background-color: $color-user;
}

</style>
