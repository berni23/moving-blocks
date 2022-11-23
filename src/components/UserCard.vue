<template>

  <div v-if="currentUser" class="user-profile container" @click="goToUser">
    <q-icon class="custom-icon" name="person"></q-icon>
    {{ currentUser.name }}

  </div>
</template>
<script lang="ts">
import {useUsersStore} from "@/stores/users";
import {computed, defineComponent} from "vue";
import {useRouter} from "vue-router";

export default defineComponent({
  name: "user-card",
  setup(props) {
    const currentUser = computed(()=>useUsersStore().currentUser)

    const router = useRouter();
    const goToUser = ()=> router.push('/user');
    return {currentUser,goToUser}
  }
})
</script>
<style lang='scss'>



.user-profile {
  position: absolute;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  border-radius: 0 !important;
  padding: 10px;
  top: 0;
  left: 0;

  .custom-icon {
    margin-bottom: 10px;
  }
}

</style>
