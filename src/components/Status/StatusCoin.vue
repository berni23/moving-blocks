<template>
  <div class="coin status-coin"
       :style="{'width':size,'height':size}">
    <img
        src='images/coins/coin.gif'
        :style="{'width':size, 'height':size}" alt="coin"/>
  </div>
</template>
<script lang="ts">
import {defineComponent} from "vue";
import {coinWidthPixels} from "@/Logic/Game/constraints";

export default defineComponent({
  name: "StatusCoin",

  setup(props) {
    return {'size':coinWidthPixels}
  }
})
</script>
<style lang='scss'>

.status-coin {
  position: relative !important;
}
</style>
