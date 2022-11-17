<template>
  <audio id="sound-click" src="sounds/accept2.mp3"></audio>
  <audio id="sound-start" src="sounds/start.mp3"></audio>
  <audio id="sound-powerup" src="sounds/powerUp.mp3"></audio>
</template>

<script lang="ts">
import {defineComponent, watch} from "vue";
import {useGamesStore} from "@/stores/games";


export default defineComponent({
  name: "Audios",

  setup() {

    const audioCoin = new Audio(require('../../assets/sounds/sound_coin.mp3'));

    const audioDamage = new Audio(require('../../assets/sounds/damage.mp3'));

    const gamesStore = useGamesStore();
    watch(() => gamesStore.currentCoins, () => audioCoin.play());
    watch(() => gamesStore.currentLives, (newVal, oldVal) => {
      if (newVal < oldVal) audioDamage.play();
    });
  }

})
</script>
