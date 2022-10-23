<template>


    <custom-button class="buttons__try-again" v-if="isCurrentUser" text="'try again'"/>
    <custom-button class="buttons__how-to"  :text="'how to play'"/>

    <button class="buttons__new-user main-button" id="btn-new-user" @click="$emit('new-user')">new user</button>
</template>
<script lang="ts">
import {useUsersStore} from "@/stores/users";
import {defineComponent, ref} from 'vue';
import CustomButton from "@/components/CustomButton.vue";

export default defineComponent({
  name: 'buttons',
  components: {CustomButton},
  setup() {
    let usersStore = useUsersStore();
    const isCurrentUser = ref(usersStore.isCurrentUser)
    return {isCurrentUser}
  }
});
</script>
<style lang="scss">


</style>
