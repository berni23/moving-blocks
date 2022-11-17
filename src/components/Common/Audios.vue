<template>
  <audio id="sound-click" src="sounds/accept2.mp3"></audio>
  <audio id="sound-start" src="sounds/start.mp3"></audio>

</template>

<script lang="ts">
import {defineComponent, watch} from "vue";
import {useGamesStore} from "@/stores/games";


export default defineComponent({
  name: "Audios",

  setup() {

    const audioCoin = new Audio(require('../../assets/sounds/sound_coin.mp3'));
    const audioDamage = new Audio(require('../../assets/sounds/damage.mp3'));
    const audioDiamond = new Audio(require('../../assets/sounds/diamond.mp3'));
    const audioPowerUp = new Audio(require('../../assets/sounds/power_up.mp3'));
    const gamesStore = useGamesStore();
    watch(() => gamesStore.currentCoins, (newVal, oldVal) => {
          if (newVal == oldVal + 3) audioDiamond.play();
          else if (newVal > oldVal) audioCoin.play()
        }
    );
    watch(() => gamesStore.currentLives, (newVal, oldVal) => {
      if (newVal < oldVal) audioDamage.play();
    });

    watch(() => gamesStore.isPowerUp, (newVal, oldVal) => {
      if (newVal) audioPowerUp.play();
    });


  }

})
</script>
