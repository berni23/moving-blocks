<template>
  <div class="coin status-coin"
       :style="{'width':size,'height':size,'backgroundImage':bgImage}">
  </div>
</template>
<script lang="ts">
import {defineComponent} from "vue";
import {coinSprite} from "@/Logic/Game/Utils/SpriteImages";
import {coinWidthPixels} from "@/Logic/Game/constraints";

export default defineComponent({
  name: "StatusCoin",

  setup(props) {
    return {'size':coinWidthPixels,bgImage: coinSprite()}
  }
})
</script>
<style lang='scss'>

.status-coin {
  position: relative !important;
}
</style>
