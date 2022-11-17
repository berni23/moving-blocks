<template>

  <div v-if="shouldAppear" class="box blue-box"

       :style="{'marginLeft':marginLeft,'marginTop':marginTop}"></div>
</template>

<script lang="ts">

import {defineComponent, reactive} from 'vue';
import {useGamesStore} from "@/stores/games";
import {bH2, gameWidth} from "@/Logic/Game/constraints";
import ElementSprite from '@/customTypes/elementSprite';
import applySpriteLogic from "@/Logic/Game/UseCases/ApplySpriteLogic";

export default defineComponent({
  name: "box",
  props: ['offsetTop', 'id'],

  setup(props, {emit}) {
    const gameStore = useGamesStore();
    const element = reactive({offsetTop: props.offsetTop, offsetLeft: gameWidth(), radius: bH2} as ElementSprite);
    const localCbCollision = () => {
      if (gameStore.isBouncingDamage) return;
      gameStore.applyDamage();
      gameStore.removeNthSprite(props.id)
    }
    return applySpriteLogic(props.id, element, localCbCollision);


  }
});
</script>

<style lang="scss">


@import './src/assets/scss/colors';

</style>
