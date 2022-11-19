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

    let currentAudio = audioCoin;

    const stopCurrentAudio = () => {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }


    const playAudio = (audio: HTMLAudioElement) => {
      stopCurrentAudio();
      currentAudio = audio;
      currentAudio.play();
    }

    watch(() => gamesStore.currentCoins, (newVal, oldVal) => {
       if (newVal == oldVal + 3) playAudio(audioDiamond);
          else if (newVal > oldVal) playAudio(audioCoin);
        }
    );
    watch(() => gamesStore.currentLives, (newVal, oldVal) => {
      if (newVal < oldVal) playAudio(audioDamage);
    });

    watch(() => gamesStore.isPowerUp, (newVal, oldVal) => {
      if (newVal) playAudio(audioPowerUp);
    });


  }

})
</script>
