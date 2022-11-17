<template>
  <div class="game-status container">
    <div class="game-status__title">Status</div>
    <div class="status">
      <ul class="lives">

        <li v-for="i in numLives" :key="i">
        <heart/>
        </li>
      </ul>
      <br>
      <ul>
        <li>
          <status-coin/>
        </li>
        <li>X<span class="coin-number">{{ numCoins?numCoins:0 }}</span></li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import {computed, defineComponent} from "vue";
import Heart from "@/components/Sprites/Heart.vue";
import { useGamesStore } from "@/stores/games";
import StatusCoin from "@/components/Status/StatusCoin.vue";

export default defineComponent({
  name: "Status",
  components: {StatusCoin, Heart},
  setup(props) {

    const gamesStore = useGamesStore();
    const numLives = computed(()=>gamesStore.currentLives);
    const numCoins = computed(()=>gamesStore.currentCoins);
    return {numCoins,numLives}
  }
})
</script>
<style lang="scss">

@import "../../assets/scss/colors";
.game-status {
  margin: 20px;
  padding: 10px;
  width: fit-content;

  font-family: 'sans-serif';

 &__title{

   text-align:left;
   margin-bottom:10px;

 }


  .status ul {
    list-style-type: none;
    display: flex;
    margin: 0;
    padding: 0;
    color: $color-primary-dark;
    font-size: 25px;
  }




}

</style>
