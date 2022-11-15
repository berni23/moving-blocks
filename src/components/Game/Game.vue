<template>
  <div>
    <h1 id="count-down"></h1>
    <div class="game-wrapper" v-if="gameHasStarted">
      <status :num-lives="lives" :num-coins="coins"/>
      <div class="game container">
        <div id="myId" class="box" style=" z-index: 10; width:50px; height:50px"></div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">

import {computed, defineComponent, onMounted, reactive} from 'vue';
import Buttons from "@/components/Buttons.vue";
import MainHeader from "@/views/MainHeader.vue";
import CustomButton from "@/components/CustomButton.vue";
import {useGamesStore} from '@/stores/games';
import ModeComponent from "@/components/Mode.vue";
import Game from '@/customTypes/game';
import startGame from "@/Logic/Game/UseCases/startGame";
import GameContent from "@/components/Game/GameContent.vue";
import Status from "@/components/Game/Status.vue";

export default defineComponent({
      name: 'Game',
      components: {Status, GameContent, CustomButton, MainHeader, Buttons, ModeComponent},
      setup(props, {emit}) {
        const gamesStore = useGamesStore();
        const game = reactive(gamesStore.currentGame as Game);
        const gameHasStarted = computed(() => gamesStore.gameHasStarted);
        onMounted(startGame);
        return {gameHasStarted, coins: game.coins, lives: game.lives}
      }
    }
);
</script>
<style lang="scss">

@import 'src/assets/scss/keyframes';
.game-wrapper {
  position: relative;
  .heart {
    background-image: url("/public/images/heart0.png");
    width: 30px;
    height: 30px;
  }
  .coin {
    position: absolute;
    background-image: url("/public/images/coin_0.png");
    width: 32px;
    height: 32px;
  }
  .diamond {
    position: absolute;
    background-image: url("/public/images/diamond0.png");
    background-repeat: no-repeat;
    transform: scale(1.5);
    width: 50px;
    height: 50px;
  }
  .power-up {
    animation: glowing 3s ease-in-out infinite;
    -webkit-animation: glowing 3s ease-in-out infinite;
  }
  .game {
    width: 97%;
    margin : 20px  auto;
    height: 500px;
    position: relative;
  }
}
</style>
