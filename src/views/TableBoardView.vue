<template>

  <main-header :title="title"/>
  <div class="table-board">
    <ranking :title="'easy mode'" :array-games="easyModeGames"></ranking>
    <ranking :title="'medium mode'" :array-games="mediumModeGames"></ranking>
    <ranking :title="'hard mode'" :array-games="hardModeGames"></ranking>

  </div>


</template>

<script lang="ts">

import game from "@/customTypes/game";
import {useGamesStore} from "@/stores/games";
import MainHeader from "@/views/MainHeader.vue";
import {computed, defineComponent, ref} from "vue";
import Ranking from "@/components/Stats/Ranking.vue";

export default defineComponent({
      name: "table-board-view",
      components: {Ranking, MainHeader},

       props:['title'],
      setup(props,{emit}) {



        const gameStore = useGamesStore();
        const games = ref<Array<game>>(gameStore.finishedGames)
        const easyModeGames = computed(() => games.value.filter((game) => game.mode.name == 'easy'));
        const mediumModeGames = computed(() => games.value.filter((game) => game.mode.name == 'medium'));
        const hardModeGames = computed(() => games.value.filter((game) => game.mode.name == 'hard'));

        return {title:props.title,easyModeGames, mediumModeGames, hardModeGames};

      }
    }
)
</script>



<style lang="scss">

@import './src/assets/scss/colors';

/* ranking styles */

.table-board {

  width:100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;


  ul {
    list-style-type: none !important;

  }


}


</style>
