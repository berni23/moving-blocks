<template>

  <div id="me" class="me box"></div>
</template>

<script lang="ts">


import {defineComponent, watch} from 'vue';
import {useGamesStore} from "@/stores/games";

export default defineComponent({
  name: "view",


  setup(props, {emit}) {

    const gameStore = useGamesStore();
    const me = document.getElementById('me') as HTMLElement;

    function applySpriteLogic() {

      let posLeft = me.offsetLeft;
      let posTop = me.offsetTop;


    }

    // const iteration = ref(gameStore.iteration);
    watch(() => gameStore.iteration, applySpriteLogic);

  }
});
</script>

<style lang="scss">


.me {
  z-index: 10;
  width: 50px;
  height: 50px;
}

</style>
