<template>

  <div v-if="shouldAppear"

       :style="{'width':size, 'height':size,'marginLeft':marginLeft,'marginTop':marginTop}"
       class="power-up">
    <img
        class="power-up__image"
        src='/images/powerUp.gif'
        :style="{'width':element.width, 'height':element.height}" alt="power_up"/>
  </div>

</template>

<script lang="ts">

import {defineComponent, reactive} from 'vue';
import {useGamesStore} from "@/stores/games";
import {gameWidth, powerUpSize} from "@/Logic/Game/constraints";
import ElementSprite from '@/customTypes/elementSprite';
import applySpriteLogic from "@/Logic/Game/UseCases/ApplySpriteLogic";

export default defineComponent({
  name: "PowerUp",
  props: ['offsetTop', 'id'],

  setup(props, {emit}) {
    const gameStore = useGamesStore();
    const element = reactive({
      offsetTop: props.offsetTop,
      offsetLeft: gameWidth(),
      width: powerUpSize,
      height: powerUpSize
    } as ElementSprite);
    const localCbCollision = () => {
      gameStore.applyPowerUp();
      gameStore.removeNthSprite(props.id);
    }
    return {element, ...applySpriteLogic(props.id, element, localCbCollision)};


  }
});
</script>

<style lang="scss">


@import '../../assets/scss/colors';

.power-up {
  //background-color: $color-power-up;

  height: 40px;
  width: 40px;

  position: absolute !important;
  &__image {

    height: 40px;
    width: 40px;


    transform: scale(1.125);
  }
}
</style>
