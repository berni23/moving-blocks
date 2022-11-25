<template>

  <div id="me" class="player box" :class='classList'
       :style="{'height':dimensions.height,'width':dimensions.width, 'marginLeft':marginLeft,'marginTop':marginTop}">
    <img v-if="spritePlayerUrl" :style="{'height':dimensions.height,'width':dimensions.width}" :src="spritePlayerUrl"
         alt="player"/>
  </div>
</template>

<script lang="ts">

import {computed, defineComponent, reactive, ref, watch} from 'vue';
import {useGamesStore} from "@/stores/games";
import {limitBottom, playerHeightPixels, playerWidthPixels, vBox} from "@/Logic/Game/constraints";
import router from '@/router';
import {removeKeyDetectors} from '@/Logic/Game/UseCases/AddKeyDetectors';


export default defineComponent({
  name: "player",
  setup(props, {emit}) {
    const gameStore = useGamesStore();
    const logicGameFinished = () => {
      removeKeyDetectors();
      gameStore.finishCurrentGame();
      router.push('/ranking');
    }

    const posLeft = computed(() => gameStore.offsetLeft);
    const posTop = computed(() => gameStore.offsetTop);
    const gameFinished = ref(false);
    const spritePlayerUrl = ref<string | null>('/images/player.gif');
    const classList = computed(() => {

      if (gameFinished.value) return [];
      return [
        gameStore.isBouncingDamage ? 'glowing-damage' : '',
        gameStore.isPowerUp ? 'glowing-power-up' : '']
    });

    function applySpriteLogic() {

      // if (gameFinished.value) return;
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

    const dimensions = reactive({height: playerHeightPixels, width: playerWidthPixels});
    const marginLeft = computed(() => posLeft.value.toString() + 'px');
    const marginTop = computed(() => posTop.value.toString() + 'px');
    watch(() => gameStore.iteration, applySpriteLogic);
    watch(() => gameStore.currentLives, () => {
          if (gameStore.currentLives == 0) {
            spritePlayerUrl.value = '/images/explosion.gif';
            gameFinished.value = true;
            dimensions.height = '250px';
            dimensions.width = '250px';
            setTimeout(logicGameFinished, 1500)
            ;
          }
        }
    );
    return {spritePlayerUrl, dimensions, marginLeft, marginTop, classList};

  }
});
</script>

<style lang="scss">


@import '../../assets/scss/colors';
@import '../../assets/scss/keyframes';

.player {
  position: absolute !important;
  z-index: 10;
  //width: 75px;
  //height: 40px;
  //background-color: $color-user;
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
