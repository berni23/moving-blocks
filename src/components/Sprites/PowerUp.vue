<template>

  <div v-if="shouldAppear"

       :style="{'width':size, 'height':size,'marginLeft':marginLeft,'marginTop':marginTop}"
       class="power-up">
    <img
        src='images/powerUps/Spinning-orb-new-GIF-2.gif'
        :style="{'width':size, 'height':size}" alt="power_up"/>
  </div>

</template>

<script lang="ts">

import {defineComponent, reactive} from 'vue';
import {useGamesStore} from "@/stores/games";
import {bH2, gameWidth} from "@/Logic/Game/constraints";
import ElementSprite from '@/customTypes/elementSprite';
import applySpriteLogic from "@/Logic/Game/UseCases/ApplySpriteLogic";
// import {powerUpSprite} from "@/Logic/Game/Utils/SpriteImages";

export default defineComponent({
  name: "PowerUp",
  props: ['offsetTop', 'id'],

  setup(props, {emit}) {
    const gameStore = useGamesStore();
    const element = reactive({offsetTop: props.offsetTop, offsetLeft: gameWidth(), radius: bH2} as ElementSprite);
    const localCbCollision = () => {

      gameStore.applyPowerUp();
      gameStore.removeNthSprite(props.id);
    }
    return {size: '50px', ...applySpriteLogic(props.id, element, localCbCollision)};


  }
});
</script>

<style lang="scss">


@import '../../assets/scss/colors';

.power-up {
  //background-color: $color-power-up;
  position: absolute !important;
}
</style>
