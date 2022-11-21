<template>
  <main-header :show-title="false"/>
  <section class="main-container container" v-if="!gameIsCreated">
    <mode-component @mode='newGame'/>

  </section>

  <game v-else/>
</template>
<script lang="ts">

import createGame from "@/Logic/Game/Services/Create/createGame";
import CustomButton from "@/components/Buttons/CustomButton.vue";
import {computed, defineComponent, ref} from 'vue';
import ModeComponent from "@/components/Game/Mode.vue";
import MainHeader from "@/views/MainHeader.vue";
import Buttons from "@/components/Buttons/Buttons.vue";
import {useUsersStore} from "@/stores/users";
import {useGamesStore} from '@/stores/games';
import Game from "@/components/Game/Game.vue";
import Mode from "@/customTypes/mode";
import User from "@/customTypes/user";

export default defineComponent({
  name: 'GameView',
  components: {Game, CustomButton, MainHeader, Buttons, ModeComponent},
  setup(props, {emit}) {

    const usersStore = useUsersStore();
    const gamesStore = useGamesStore();

    const mode = ref<Mode | null>(null);
    const user = ref<User | null>(usersStore.currentUser);
    const gameIsCreated = computed(() => Boolean(gamesStore.currentGame));
    const newGame = function (name: string) {
      mode.value = Object.assign({}, gamesStore.modeOfName(name))
      const newGame = createGame(user.value ? (user.value as User).id : null, mode.value)
      gamesStore.setCurrentGame(newGame);
    }

    // const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

    const gameIsOngoing = computed(() => gamesStore.gameIsOngoing);
    return {user, newGame, gameIsCreated, gameIsOngoing}
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
