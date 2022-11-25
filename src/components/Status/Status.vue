<template>
  <div class="game-status">
<!--    <div class="game-status__title">Status</div>-->
    <div class="game-status__content">
      <ul class="lives container">
        <li v-if="numLives" v-for="i in numLives" :key="i">
        <heart/>
        </li>
      </ul>
      <br>
      <ul class="coins container">
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
import {useGamesStore} from "@/stores/games";
import StatusCoin from "@/components/Status/StatusCoin.vue";

export default defineComponent({
  name: "Status",
  components: {StatusCoin, Heart},
  setup(props,{emit}) {

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

  &__content {


    display: flex;


    ul:first-of-type{


      margin-right: 10px;
    }
    ul {

      list-style-type: none;
      display: flex;
      margin:0;
      padding: 10px;
      color: $color-primary-dark;
      font-size: 25px;
    }
  }




}

</style>
