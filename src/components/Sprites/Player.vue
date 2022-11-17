<template>

  <div id="me" class="player box" :class='classList' :style="{'marginLeft':marginLeft,'marginTop':marginTop}">

    <img  src='images/player.gif' alt="player"/>
  </div>
</template>

<script lang="ts">

import {computed, defineComponent, watch} from 'vue';
import {useGamesStore} from "@/stores/games";
import {boxWidthPixels, limitBottom, vBox} from "@/Logic/Game/constraints";

export default defineComponent({
  name: "player",

  setup(props, {emit}) {
    const gameStore = useGamesStore();
    const posLeft = computed(() => gameStore.offsetLeft);
    const posTop = computed(() => gameStore.offsetTop);


    const classList = computed(() => [
      gameStore.isBouncingDamage ? 'glowing-damage' : '',
      gameStore.isPowerUp ? 'glowing-power-up' : '']);

    function applySpriteLogic() {
      if (!gameStore.currentKey) return
      if (gameStore.goUp) {
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
        gameStore.setOffsetLeft(Math.min(posLeft.value + vBox));
        return
      }
    }

    const marginLeft = computed(() => posLeft.value.toString() + 'px');
    const marginTop = computed(() => posTop.value.toString() + 'px');
    watch(() => gameStore.iteration, applySpriteLogic);
    return {size: boxWidthPixels, marginLeft, marginTop, classList};

  }
});
</script>

<style lang="scss">


@import '../../assets/scss/colors';
@import '../../assets/scss/keyframes';

.player {
  position: absolute !important;
  z-index: 10;
  width: 75px;
  height: 40px;
  background-color: $color-user;
  transition: 1s animation;
}


.glowing-damage {

  animation: glowing-damage 1s ease-in-out infinite alternate;
}

.glowing-power-up {
  animation: glowing 3s ease-in-out infinite;
  -webkit-animation: glowing 3s ease-in-out infinite;

}
</style>
