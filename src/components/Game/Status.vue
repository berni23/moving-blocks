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
          <coin/>
        </li>
        <li>X<span class="coin-number">{{ numCoins }}</span></li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import {defineComponent, ref} from "vue";
import Heart from "@/components/Game/Sprites/Heart.vue";
import Coin from "@/components/Game/Sprites/Coin.vue";

export default defineComponent({
  name: "Status",
  components: {Coin, Heart},
  props: {
    numCoins: {
      type: Number,
      default: 0
    },

    numLives: {
      type: Number,
      default: 0
    },
  },
  setup(props) {
    const numCoins = ref(props.numCoins);
    const numLives = ref(props.numLives);
    return {numCoins,numLives}
  }
})
</script>
<style lang="scss">

@import "src/assets/scss/colors";
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
