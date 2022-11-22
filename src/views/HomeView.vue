<template>

  <main-header/>

  <section class="main-container container">
    <buttons @howToPlay="goHowToPlay" @newUser="goToNewUser" @newGame="goToNewGame"/>
  </section>
</template>

<script lang="ts">
import {defineComponent, onBeforeMount, ref} from 'vue';
import Buttons from "@/components/Buttons/Buttons.vue";
import MainHeader from "@/views/MainHeader.vue";
import {useRouter} from "vue-router";
import {useUsersStore} from "@/stores/users";
import resetGame from "@/Logic/Game/UseCases/ResetGame";

export default defineComponent({
  name: 'HomeView',
  components: {MainHeader, Buttons},

  setup(props, {emit}) {

    onBeforeMount(() => {

      console.log('before mounting home view');
      resetGame()
    })


    const router = useRouter();
    const usersStore = useUsersStore();
    const isCurrentUser = ref(usersStore.isCurrentUser)
    const goHowToPlay = () => router.push('controls')
    const goToNewUser = () => router.push('new-user')
    const goToNewGame = () => router.push('choose-mode')
    return {isCurrentUser, goHowToPlay, goToNewUser,goToNewGame}

  }
});
</script>

<style lang="scss">

</style>
