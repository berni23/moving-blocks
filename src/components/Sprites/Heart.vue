<template>
  <div class='heart' :style="{'backgroundImage':bgImage}">
  </div>
</template>
<script lang="ts">
import {defineComponent} from "vue";
import {heartSprite} from "@/Logic/Game/Utils/SpriteImages";

export default defineComponent({
  name: "heart",
  setup(props) {
    return {bgImage: heartSprite()}
  }
})
</script>
<style lang='scss'>
</style>
