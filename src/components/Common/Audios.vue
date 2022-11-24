<template>
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
    const audioExplosion = new Audio(require('../../assets/sounds/explosion.mp3'));
    const gamesStore = useGamesStore();
    let currentAudio = audioCoin;
    let play = true;
    let hold = false;
    const stopCurrentAudio = () => {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
    const playAudio = (audio: HTMLAudioElement) => {
      if (hold || !play) return;
      stopCurrentAudio();
      currentAudio = audio;
      currentAudio.play();
      return currentAudio
    }
    let unwatch1 = watch(() => gamesStore.currentCoins, (newVal, oldVal) => {
          if (newVal == oldVal + 3) playAudio(audioDiamond);
          else if (newVal > oldVal) playAudio(audioCoin);
        }
    );
    let unwatch2 = watch(() => gamesStore.currentLives, (newVal, oldVal) => {
      if (newVal == 0) {
        playAudio(audioExplosion);
        play = false
      }
      if (newVal < oldVal) {
        let audio = playAudio(audioDamage);
        hold = true;
        if (audio) audio.onended = () => hold = false;

      }

    });
    let unwatch3 = watch(() => gamesStore.isPowerUp, (newVal, oldVal) => {
      if (newVal) {
        let audio = playAudio(audioPowerUp)
        hold = true;
        if (audio) audio.onended = () => hold = false;
      }
    });
  }
})
</script>
