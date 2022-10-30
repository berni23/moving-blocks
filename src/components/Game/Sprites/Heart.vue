<template>
  <div class='heart' :style="style">
  </div>
</template>
<script lang="ts">
import {useGamesStore} from "@/stores/games";
import {computed, defineComponent} from "vue";

export default defineComponent({
  name: "heart",
  props: {},
  setup(props) {
    const gameStore = useGamesStore();
    const hFrame = computed(() => gameStore.hFrame);
    const style = computed(() => {


      return {
        backgroundImage: `url('images/heart${hFrame.value}.png'`
      }
    });
    return {style}
  }
})
</script>
<style lang='scss'>
</style>
