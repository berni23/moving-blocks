<template>

  <div class="box blue-box" :style="{'marginLeft':marginLeft,'marginTop':marginTop}"></div>
</template>

<script lang="ts">

import {computed, defineComponent, reactive, watch} from 'vue';
import {useGamesStore} from "@/stores/games";
import {gameWidth, vOthers} from "@/Logic/Game/constraints";
import {intToPix} from '@/Logic/Game/Utils/pixelConv';

export default defineComponent({
  name: "box",
  props: ['offsetTop'],

  setup(props, {emit}) {
    const gameStore = useGamesStore()

    // const gWidth = computed(gameWidth);
    const localState = reactive({offsetTop: props.offsetTop, offsetLeft: gameWidth()});

    const marginLeft = computed(() => intToPix(localState.offsetLeft));
    const marginTop = computed(() => intToPix(localState.offsetTop));

    function applySpriteLogic() {

      // console.log('applying sprite logic',gameStore.iteration);
      localState.offsetLeft = localState.offsetLeft - vOthers;


      //collision with main box

      //outside of borders
      if (localState.offsetLeft < 0) emit('remove')

    }

    watch(() => gameStore.iteration, applySpriteLogic);
    return {marginLeft, marginTop};

  }
});
</script>

<style lang="scss">


@import './src/assets/scss/colors';

</style>
