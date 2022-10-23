<template>
  <div class="home">
    <!--    <img alt="Vue logo" src="../assets/logo.png">-->
    <buttons/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import Buttons from "@/components/Buttons.vue";

export default defineComponent({
  name: 'HomeView',
  components: {Buttons},
});
</script>
