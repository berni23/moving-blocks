<template>
  <div class="coin"  :class="['isStatus'?'status-coin':'']" :style="style">
  </div>
</template>
<script lang="ts">
import {computed, defineComponent, ref} from "vue";
import {useGamesStore} from "@/stores/games";

export default defineComponent({
  name: "Coin",
  props: {
    isStatus:{
      default:false,
      type:Boolean
    }
  },
  setup(props) {
    const gameStore = useGamesStore();
    const isStatus = ref(props.isStatus);
    const cFrame = computed(() => gameStore.cFrame);
    const style = computed(() => {

      return {
        backgroundImage: `url('images/coin_${cFrame.value}.png'`
      }
    });
    return {style,isStatus}
  }
})
</script>
<style lang='scss'>

.status-coin{
  position:relative !important;
}
</style>
