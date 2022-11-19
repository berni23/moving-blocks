<template>

  <div class="container ranking">
    <p class="ranking__title">Easy Mode</p>
    <div class="ranking__content">
      <ul class="user">
        <li class="user-title">
          users
        </li>
      </ul>
      <ul class="score">
        <li class="score-title">
          score
        </li>
      </ul>
      <ul class="time">
        <li class="time-title">
          time
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import {defineComponent, ref} from "vue";

import Game from "@/customTypes/game";

export default defineComponent({
  name: "Status",

  props: {

    title: {
      type: String
    },
    arrayGames: {
      type: Array
    }
  },
  setup(props) {

    const arrayGames = ref(props.arrayGames as Array<Game>);
    return {arrayGames};
  }
})
</script>
<style lang='scss'>
</style>
