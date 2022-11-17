<template>
  <div class="coin status-coin"
       :style="{'backgroundImage':bgImage}">
  </div>
</template>
<script lang="ts">
import {defineComponent} from "vue";
import {coinSprite} from "@/Logic/Game/Utils/SpriteImages";

export default defineComponent({
  name: "StatusCoin",

  setup(props) {
    return {bgImage: coinSprite()}
  }
})
</script>
<style lang='scss'>

.status-coin {
  position: relative !important;
}
</style>
