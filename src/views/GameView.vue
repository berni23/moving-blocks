<template>
  <main-header :show-title="false"/>
  <game/>
</template>
<script lang="ts">

import CustomButton from "@/components/Buttons/CustomButton.vue";
import {defineComponent} from 'vue';
import ModeComponent from "@/components/Game/Mode.vue";
import MainHeader from "@/views/MainHeader.vue";
import Buttons from "@/components/Buttons/Buttons.vue";
import Game from "@/components/Game/Game.vue";
import Audios from "@/components/Common/Audios.vue";

export default defineComponent({
  name: 'GameView',
  components: {Audios, Game, CustomButton, MainHeader, Buttons, ModeComponent},
  setup(props, {emit}) {
    return {};
  }
});
</script>

<style lang="scss">
.buttons-mode {
  button {
    margin: 0 15px;
    font-weight: bold;
    outline: none;
  }

  .buttons-mode button:hover {
    animation: shadow 6s ease-in-out;
    -webkit-animation: shadow 6s ease-in-out;
  }

  .mode-selected {
    box-shadow: 0 0 50px 0 rgba(135, 206, 250, 1);
  }
}
</style>
