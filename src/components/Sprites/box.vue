<template>

  <div v-if="shouldAppear" class="box"

       :style="{'width':size, 'height':size,'marginLeft':marginLeft,'marginTop':marginTop}">

    <img
        src='images/alien.gif'
        :style="{'width':spriteSize, 'height':spriteSize,'margin':'2.5px'}"  style='margin:2.5px' alt="alien"/>
  </div>
</template>

<script lang="ts">

import {defineComponent, reactive} from 'vue';
import {useGamesStore} from "@/stores/games";
import {bH2, boxSize, boxWidthPixels, gameWidth} from "@/Logic/Game/constraints";
import ElementSprite from '@/customTypes/elementSprite';
import applySpriteLogic from "@/Logic/Game/UseCases/ApplySpriteLogic";
import {intToPix} from "@/Logic/Game/Utils/pixelConv";

export default defineComponent({
  name: "box",
  props: ['offsetTop', 'id'],

  setup(props, {emit}) {
    const gameStore = useGamesStore();
    const element = reactive({
      offsetTop: props.offsetTop,
      offsetLeft: gameWidth(),
      width2: boxSize,
      height2: boxSize
    } as ElementSprite);


    let collisions = 0;
    const localCbCollision = () => {
      collisions++;

      console.log('collision!',collisions);
      if (gameStore.isBouncingDamage) return;
      if (!gameStore.isPowerUp) gameStore.applyDamage();

      gameStore.removeNthSprite(props.id);
    }
    const spriteSize = intToPix(boxSize + 5);
    return {spriteSize: spriteSize, size: boxWidthPixels, ...applySpriteLogic(props.id, element, localCbCollision)};


  }
});
</script>

<style lang="scss">


@import '../../assets/scss/colors';


.box {

  background-color: blue !important;
}
</style>
