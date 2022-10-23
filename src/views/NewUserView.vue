<template>

  <div>
    <main-header/>
    <section class="main-container">
      <q-input class='input-name' type="text" v-model="username"/>
      <div class="buttons-mode hidden">
        <button type="button" class="shadow-btn mode-selected">EASY</button>
        <button type="button" class="shadow-btn">MEDIUM</button>
        <button type="button" class="shadow-btn">HARD</button>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';
import MainHeader from "@/views/MainHeader.vue";
import {useRouter} from "vue-router";
import {useQuasar} from "quasar";
import createUserAndSetAsCurrent from "@/Logic/User/UseCases/createUserAndSetAsCurrent";

export default defineComponent({
  name: 'new-user',
  components: {MainHeader},
  setup(props, {emit}) {
    const username = ref('')
    const $q = useQuasar();
    const userValidation = (username: string) => username.length > 2
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
    return {username}
  }
});
</script>
<style lang="scss">
.input-name {
  border: 0;
  background: rgba(135, 206, 250, 0.3);
  border-radius: 7px;
}
</style>
