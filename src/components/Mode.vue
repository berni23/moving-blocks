<template>

  <div class="buttons-mode">
    <custom-button @clicked="$emit('mode','easy')" :text="'EASY'"/>
    <custom-button @clicked="$emit('mode','medium')" :text ="'MEDIUM'"/>
    <custom-button @clicked="$emit('mode','hard')" :text ="'HARD'"/>
  </div>
</template>

<script lang="ts">
import CustomButton from "@/components/CustomButton.vue";
export default {
  name: "Mode",
  components: {CustomButton},
}
</script>

<style lang="scss">
</style>
