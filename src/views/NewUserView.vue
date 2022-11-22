<template>

  <div>
    <main-header/>

    <section class="main-container user-view container">
      <div v-if="currentUser" class="user-profile container">
        <q-icon  class="custom-icon" name="person"></q-icon>
        {{currentUser.name}}

      </div>

      <div class="choose-user">

        <q-select borderless v-model="model" :options="userOptions" label="Borderless" />
      </div>
<!--      <div class="new-user">-->
<!--        <h2 class="new-user__title">Username</h2>-->
<!--        <q-input class='input-name new-user__input' type="text" v-model="username"/>-->
<!--      </div>-->
    </section>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent, ref} from 'vue';
import MainHeader from "@/views/MainHeader.vue";
import {useRouter} from "vue-router";
import {useQuasar} from "quasar";
import createUserAndSetAsCurrent from "@/Logic/User/UseCases/createUserAndSetAsCurrent";
import {useUsersStore} from '@/stores/users';
import CurrentUser from "@/components/UserCard.vue";

export default defineComponent({
  name: 'new-user',
  components: {CurrentUser, MainHeader},
  setup(props, {emit}) {
    const username = ref('')

    const userStore = useUsersStore();
    const currentUser = ref(useUsersStore().currentUser);
    const $q = useQuasar();
    const userValidation = (username: string) => username.length > 2

    const chosenUserName = ref('');
    const chosenUser = computed(()=>userStore.getUserOfName(username.value));
    const router = useRouter();
    document.onkeyup = function (e) {
      if (e.key == 'Enter') {
        if (userValidation(username.value)) {
          createUserAndSetAsCurrent(username.value)
          router.push('game');

        } else {
          $q.notify({message: 'please choose valid username', color: 'red'})
        }
      }
    }
    return {userOptions:userStore.userNames,currentUser,username}
  }
});
</script>
<style lang="scss">




//.user-view{
//
//
//  position:relative;
//  .user-profile{
//    position:absolute;
//    display: flex;
//    flex-direction: column;
//    text-align:center;
//    align-items: center;
//    border-radius: 0!important;
//    padding:10px;
//    top:0;
//    left:0;
//
//    .custom-icon{
//
//
//      margin-bottom:10px;
//    }
//  }
//
//}
.new-user {


  display: flex;
  flex-direction: column;

  &__input {
    border: 0;
    background: rgba(135, 206, 250, 0.3);
    border-radius: 7px;
  }

}
</style>
