<template>


  <div class="mode">
    <h2 class="mode__title">DIFFICULTY</h2>
  <div class="mode__buttons-mode">
    <custom-button @clicked="$emit('mode','easy')" :text="'EASY'"/>
    <custom-button @clicked="$emit('mode','medium')"  :phase=true :text ="'MEDIUM'"/>
    <custom-button @clicked="$emit('mode','hard')" :text ="'HARD'"/>
  </div>
  </div>
</template>

<script lang="ts">
import CustomButton from "@/components/Buttons/CustomButton.vue";
export default {
  name: "Mode",
  components: {CustomButton},
}

</script>

<style lang="scss">
.mode{
  display: flex;
  flex-direction: column;
}
</style>
