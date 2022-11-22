<template>
  <main-header :show-title="true" :title="'Difficulty'"/>
  <section class="main-container container">
    <mode-component @mode='newGame'/>
  </section>
</template>
<script lang="ts">

import CustomButton from "@/components/Buttons/CustomButton.vue";
import {defineComponent, onBeforeMount, ref} from 'vue';
import ModeComponent from "@/components/Game/Mode.vue";
import MainHeader from "@/views/MainHeader.vue";
import Buttons from "@/components/Buttons/Buttons.vue";
import {useUsersStore} from "@/stores/users";
import Game from "@/components/Game/Game.vue";
import User from "@/customTypes/user";
import Audios from "@/components/Common/Audios.vue";
import {useRouter} from "vue-router";
import resetGame from "@/Logic/Game/UseCases/ResetGame";

export default defineComponent({
  name: 'ChooseModeView',
  components: {Audios, Game, CustomButton, MainHeader, Buttons, ModeComponent},
  setup(props, {emit}) {


    onBeforeMount(() => {
      console.log('choose mode');
      resetGame()
    })
    const usersStore = useUsersStore();
    const router = useRouter();
    const user = ref<User | null>(usersStore.currentUser);
    const newGame = (name: string) => router.push({name: 'game', params: {'mode': name}});
    return {user, newGame}
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
