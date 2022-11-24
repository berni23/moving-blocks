<template>


  <div class="background-wrapper" style="z-index:5">
    <div class="stars stars1"></div>

    <div class="stars stars2"></div>
    <div class="stars stars3"></div>

    <div class="twinkling"></div>
  </div>
</template>
<script lang="ts">
import {defineComponent} from "vue";
import '/src/assets/scss/background.scss'

export default defineComponent({
  name: "background",
  props: {},
  setup(props,{emit}) {
    return {}
  }
})
</script>
<style lang='scss'>
</style>
