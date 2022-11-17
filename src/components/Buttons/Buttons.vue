<template>

  <div class="buttons">
    <custom-button class="buttons__try-again" v-if="isCurrentUser" :text="'new game'"/>
    <custom-button class="buttons__how-to" @clicked='goHowToPlay' :text="'how to play'"/>
    <custom-button class="buttons__new-user" @clicked="emitNewUser" :text="'new user'"/>
  </div>

</template>
<script lang="ts">
import {useUsersStore} from "@/stores/users";
import {defineComponent, ref} from 'vue';
import CustomButton from "@/components/Buttons/CustomButton.vue";
import {useRouter} from "vue-router";

export default defineComponent({
  name: 'buttons',
  components: {CustomButton},
  setup(props, {emit}) {

    const router = useRouter();
    const usersStore = useUsersStore();
    const isCurrentUser = ref(usersStore.isCurrentUser)
    const emitNewUser = () => emit('new-user')
    const goHowToPlay = () => router.push('how-to-play')

    return {isCurrentUser, goHowToPlay, emitNewUser}

  }
})


</script>
<style lang="scss">
.buttons {
  display: flex;
  justify-content: space-around;

  > * {
    margin-left: 10px;
  }
}
</style>
