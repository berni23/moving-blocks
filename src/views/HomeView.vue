<template>

  <main-header/>
  <div class="home container">
    <!--    <img alt="Vue logo" src="../assets/logo.png">-->
    <buttons/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import Buttons from "@/components/Buttons.vue";
import MainHeader from "@/views/MainHeader.vue";

export default defineComponent({
  name: 'HomeView',
  components: {MainHeader, Buttons},
});
</script>

<style lang="scss">

.home {
  position: relative;
  width: 100%;
  height: 100%;
  padding-bottom: 20px;
  margin: 5% 0;
  justify-content: center;
  align-items: center;
  text-align: center;
}

</style>
