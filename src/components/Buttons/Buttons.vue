<template>

  <div class="buttons">
    <custom-button class="buttons__try-again" v-if="isCurrentUser"  @clicked="emitNewGame" :text="'new game'"/>
    <custom-button class="buttons__how-to" :phase="true" @clicked='emitHowToPlay' :text="'how to play'"/>
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
     const usersStore = useUsersStore();
    const isCurrentUser = ref(usersStore.isCurrentUser)
    const emitNewUser = () => emit('new-user')
    const emitHowToPlay = () =>emit('how-to-play');
    const emitNewGame = () =>emit('new-game');
    return {isCurrentUser, emitHowToPlay, emitNewUser,emitNewGame}

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
