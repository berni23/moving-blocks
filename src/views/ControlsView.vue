<template>
  <div>

    <how-to-play/>
  </div>
</template>
<script lang="ts">
import {defineComponent} from "vue";
import HowToPlay from "@/components/HowToPlay.vue";

export default defineComponent({
  name: "Controls-view",
  components: {HowToPlay},
  props: {},
  setup(props,{emit}) {
    return {}
  }
})
</script>
<style lang='scss'>
</style>
