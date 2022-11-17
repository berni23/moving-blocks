<template>

  <main-header/>

  <section class="main-container container">
    <buttons @newUser="goToNewUser"/>
  </section>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';
import Buttons from "@/components/Buttons/Buttons.vue";
import MainHeader from "@/views/MainHeader.vue";
import {useRouter} from "vue-router";
import {useUsersStore} from "@/stores/users";
import { useGamesStore } from '@/stores/games';

export default defineComponent({
  name: 'HomeView',
  components: {MainHeader, Buttons},

  setup(props, {emit}) {
    const router = useRouter();
    const usersStore = useUsersStore();
    const isCurrentUser = ref(usersStore.isCurrentUser)
    const emitNewUser = () => emit('new-user')
    const goHowToPlay = () => router.push('how-to-play')
    const goToNewUser = () => router.push('new-user')
    return {isCurrentUser, goHowToPlay, goToNewUser, emitNewUser}

  }
});
</script>

<style lang="scss">

</style>
