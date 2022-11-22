<template>

  <div>
    <main-header/>

    <section class="main-container user-view container">
      <user-card/>
      <div class="user-view__content">
        <div class="user-view__content__item">
          <div class="user-view__content__item__title">
            Choose a user
          </div>
          <div class="user-view__content__item__content container">
            <div class="choose-user">
              <q-select v-model="chosenUserName" :options="userOptions" label="Select user"/>
            </div>
            <q-btn class='choose-user__ok' color='primary' label="ok" @click="setUserAsCurrent"/>
          </div>
        </div>
        <div>OR</div>
        <div class="user-view__content__item">
          <div class="user-view__content__item__title">
            Create a new one
          </div>
          <div class="user-view__content__item__content container">
            <div class="choose-user">
              <q-input class='input-name' label="username" type="text" v-model="username"/>
            </div>
            <q-btn class='choose-user__ok' color='primary' label="ok" @click="logicCreateUser"/>

          </div>
        </div>
      </div>
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
import CustomButton from "@/components/Buttons/CustomButton.vue";
import { userValidation } from '@/Logic/validations';
import {warning, wellDone} from "@/Logic/Notifications";
import UserCard from "@/components/UserCard.vue";

export default defineComponent({
  name: 'user',
  components: {UserCard, CustomButton, CurrentUser, MainHeader},
  setup(props, {emit}) {
    const router = useRouter();
    const $q = useQuasar();
    const userStore = useUsersStore();
    const currentUser = ref(useUsersStore().currentUser);
    const username = ref('');
    const chosenUserName = ref(userStore.currentUser ? userStore.currentUser.name : '');
    const chosenUser = computed(() => userStore.getUserOfName(chosenUserName.value));
    const setUserAsCurrent = () => {
      if (chosenUser.value) userStore.setUserAsCurrent(chosenUser.value);
      else warning('please select a valid user',$q);
    }
    const logicCreateUser = () => {
      if (userValidation(username.value,$q)) {
        wellDone('Hi ' +username.value +'!',$q)
        createUserAndSetAsCurrent(username.value)
        router.push('game');
      }
    }

    return {userOptions: userStore.userNames, currentUser, username, chosenUserName, setUserAsCurrent, logicCreateUser}
  }
});
</script>
<style lang="scss">


@import 'src/assets/scss/fonts';


.user-view {
  position: relative;
  display: flex;
  flex-direction: column;


  &__content {


    display: flex;
    text-align: center;
    align-items: center;


    &__item {


      min-height: 100px !important;

      &__content {


        height: 245px !important;
      }
    }

  }

  .choose-user {

    padding: 30px;

    font-family: Roboto, serif !important;
    font-size: 1.5rem !important;

    .q-field__inner {
      min-width: 150px;
    }

    &__ok {
      margin: 15px 0;

      font-family: Roboto, Serif;
    }

  }


}

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
