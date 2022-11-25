<template>

  <div v-if="shouldAppear" class="box"
       :style="{width:size, height:size,'marginLeft':marginLeft,'marginTop':marginTop}">

    <img
        class="box__image"
        src='/images/alien.gif'
        :style="{width:size, height:size}" alt="alien"/>
  </div>
</template>

<script lang="ts">

import {defineComponent, reactive} from 'vue';
import {useGamesStore} from "@/stores/games";
import {boxSize, boxWidthPixels, gameWidth} from "@/Logic/Game/constraints";
import ElementSprite from '@/customTypes/elementSprite';
import applySpriteLogic from "@/Logic/Game/UseCases/ApplySpriteLogic";
import {intToPix} from "@/Logic/Game/Utils/pixelConv";
import removeSprite from '@/Logic/Game/UseCases/removeSprite';

export default defineComponent({
  name: "box",
  props: ['offsetTop', 'id'],

  setup(props, {emit}) {
    const gameStore = useGamesStore();
    const element = reactive({
      offsetTop: props.offsetTop,
      offsetLeft: gameWidth(),
      width: boxSize,
      height: boxSize
    } as ElementSprite);

    const localCbCollision = () => {
      if (gameStore.isBouncingDamage) return;
      if (!gameStore.isPowerUp) gameStore.applyDamage();
      removeSprite(props.id);
    }
    const spriteSize = intToPix(boxSize + 5);
    return {spriteSize: spriteSize, size: boxWidthPixels, ...applySpriteLogic(props.id, element, localCbCollision)};


  }
});
</script>

<style lang="scss">


@import '../../assets/scss/colors';


.box {

  //background-color: blue !important;

  &__image{
    transform:scale(1.125);
  }
}
</style>
