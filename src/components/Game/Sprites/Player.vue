<template>
  <div id="me" class="player box"  :class='classList' :style="{'marginLeft':marginLeft,'marginTop':marginTop}"></div>
</template>

<script lang="ts">

import {computed, defineComponent, watch} from 'vue';
import {useGamesStore} from "@/stores/games";
import {limitBottom, vBox} from "@/Logic/Game/constraints";

export default defineComponent({
  name: "player",

  setup(props, {emit}) {
    const gameStore = useGamesStore();
    // const iteration = computed(() => gameStore.iteration);
    const posLeft = computed(() => gameStore.offsetLeft);
    const posTop = computed(() => gameStore.offsetTop);


    const classList = computed(() => [gameStore.isBouncingDamage ? 'glowing-damage' : '']);

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

        gameStore.setOffsetTop(Math.max(posTop.value - vBox, 0));
        return;
      }

      if (gameStore.goDown) {
        gameStore.setOffsetTop(Math.min(posTop.value + vBox, limitBottom));
        return
      }

      if (gameStore.goLeft) {

        let newOffset = Math.max(posLeft.value - vBox, 0);
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
    return {marginLeft, marginTop,classList};

  }
});
</script>

<style lang="scss">


@import './src/assets/scss/colors';
@import './src/assets/scss/keyframes';

.player {
  position: absolute !important;
  z-index: 10;
  width: 50px;
  height: 50px;
  background-color: $color-user;
}


.glowing-damage {

  animation: glowing-damage 1s ease-in-out infinite alternate;
}
</style>
