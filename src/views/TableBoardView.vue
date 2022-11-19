<template>

  <main-header/>
  <div class="table-board">
    <div class="easy-mode container ranking">
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
    <div class="medium-mode container ranking">
      <p class="title-ranking">Medium Mode</p>
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
    <div class="hard-mode container ranking">
      <p class="title-ranking">Hard Mode</p>
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

import { useGamesStore } from "@/stores/games";
import MainHeader from "@/views/MainHeader.vue";
import {defineComponent, ref} from "vue";

export default defineComponent({
      name: "table-board-view",
      components: {MainHeader},
      setup() {

        //
        // const gameStore = useGamesStore();
        //
        // const games =ref<Array<game>(gameStore.finishedGames)
        //
        // let easyModeGames = computed(()=>games.filter(
        //
        //
        // return {};

      }
    }
)
</script>

<style lang="scss">

@import './src/assets/scss/colors';

/* ranking styles */

.table-board {

  display: flex;
  flex-direction: row;


  ul {
    list-style-type: none !important;

  }

  .ranking {

    margin: 30px;
    padding: 20px;
    display: flex;
    flex-direction: column;

    &__content {

      display: flex;
      flex-direction: row;
    }

    li {

      margin: 10px;
    }

    &__title {

      font-size: 30px;
    }


    .user,
    .score,
    .time {

      font-family: serif;
    }

    .user-title,
    .score-title,
    .time-title {

      border: 1px solid $color-primary;
      padding: 5px;;
    }

  }

}


</style>
