<template>

  <main-header/>

  <section class="main-container container">
    <buttons @howToPlay="goHowToPlay" @newUser="goToNewUser" @newGame="goToNewGame"/>
  </section>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';
import Buttons from "@/components/Buttons/Buttons.vue";
import MainHeader from "@/views/MainHeader.vue";
import {useRouter} from "vue-router";
import {useUsersStore} from "@/stores/users";

export default defineComponent({
  name: 'HomeView',
  components: {MainHeader, Buttons},

  setup(props, {emit}) {
    const router = useRouter();
    const usersStore = useUsersStore();
    const isCurrentUser = ref(usersStore.isCurrentUser)
    const goHowToPlay = () => router.push('how-to-play')
    const goToNewUser = () => router.push('new-user')
    const goToNewGame = () => router.push('game')
    return {isCurrentUser, goHowToPlay, goToNewUser,goToNewGame}

  }
});
</script>

<style lang="scss">

</style>
