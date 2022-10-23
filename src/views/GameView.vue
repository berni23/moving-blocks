<template>
  <main-header/>
  <section class="main-container container">
    <mode-component @mode='newGame'/>
  </section>
</template>
<script lang="ts">
import {computed, defineComponent, ref} from 'vue';
import Buttons from "@/components/Buttons.vue";
import MainHeader from "@/views/MainHeader.vue";
import {useUsersStore} from "@/stores/users";
import {useRouter} from "vue-router";
import CustomButton from "@/components/CustomButton.vue";
import {useGamesStore} from '@/stores/games';


import ModeComponent from "@/components/Mode.vue";
import Mode from "@/customTypes/mode";
import createGame from "@/Logic/Game/Services/createGame";

export default defineComponent({
  name: 'GameView',
  components: {CustomButton, MainHeader, Buttons, ModeComponent},
  setup(props, {emit}) {
    const router = useRouter();
    const usersStore = useUsersStore();
    const gamesStore = useGamesStore();
    const mode = ref<Mode | null>(null);
    const user = computed(() => usersStore.currentUser);
    if (!user.value) router.push('new-user');
    const newGame = function (name: string) {

      mode.value = Object.assign({}, gamesStore.modeOfName(name))
      gamesStore.currentGame = createGame(usersStore.currentUserId as number, mode.value);

    }


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
