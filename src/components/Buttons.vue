<template>

  <div class="buttons">
    <button class="buttons__try-again" v-if="isCurrentUser" id="btn-try-again" @click="$emit('try-again')">try again</button>
    <button class="buttons__how-to" id="btn-how-to">
      <router-link to="/how-to-play">How to play</router-link>
    </button>
    <button class="buttons__new-user" id="btn-new-user" @click="$emit('new-user')">new user</button>
  </div>
</template>


<script lang="ts">

import {usersStore} from "@/stores/store";
import {defineComponent, ref} from 'vue';

export default defineComponent({
  name: 'buttons',

  setup() {
    const isCurrentUser = ref(usersStore.isCurrentUser)
    return {isCurrentUser}
  }
});
</script>
