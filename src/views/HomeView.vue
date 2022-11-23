<template>

  <main-header/>
  <section class="main-container container background-wrapper">
    <user-card/>


    <buttons @howToPlay="goHowToPlay" @newUser="goToNewUser" @newGame="goToNewGame"/>
  </section>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';
import Buttons from "@/components/Buttons/Buttons.vue";
import MainHeader from "@/views/MainHeader.vue";
import {useRouter} from "vue-router";
import {useUsersStore} from "@/stores/users";
import resetGame from "@/Logic/Game/UseCases/ResetGame";
import UserCard from "@/components/UserCard.vue";
import Background from "@/components/background.vue";

export default defineComponent({
  name: 'HomeView',
  components: {Background, UserCard, MainHeader, Buttons},

  setup(props, {emit}) {
    resetGame();
    const router = useRouter();
    const usersStore = useUsersStore();
    const isCurrentUser = ref(usersStore.isCurrentUser)
    const goHowToPlay = () => router.push('controls')
    const goToNewUser = () => router.push('user')
    const goToNewGame = () => router.push('choose-mode')
    return {isCurrentUser, goHowToPlay, goToNewUser, goToNewGame}

  }
});
</script>

<style lang="scss">

</style>
