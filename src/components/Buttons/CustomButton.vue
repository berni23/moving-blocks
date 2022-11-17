<template>
  <button type="button" class="shadow-btn" :class="[phase?'phase':'main-button']" @click="buttonClick">

    {{ text }}
  </button>
</template>

<script lang="ts">

import {defineComponent, ref} from "vue";

export default defineComponent({
  name: 'custom-button',
  props: {

    phase: {
      type: Boolean,
      default: false
    },
    sound: {
      type: Boolean,
      default: true
    },
    text: {
      type: String,
      default: ''
    }
  },
  setup(props, {emit}) {
    const text = ref(props.text)
    const sound = ref(props.sound);
    const phase = ref(props.phase);

    function buttonClick() {
      const soundClick = document.getElementById('sound-click') as HTMLAudioElement;
      emit('clicked')
      if (props.sound) soundClick.play();
    }
    return {text, sound, phase, buttonClick}
  }
})
;
</script>

<style lang="scss">

@import '../../assets/scss/colors';
@import '../../assets/scss/fonts';
@import "../../assets/scss/keyframes";

a {
  color: black;
  outline-style: unset;
  text-decoration: none;
}

.shadow-btn {
  background-color: transparent;
  border: 0;
  border-radius: 3px;
  margin: 10px 0;
  cursor: pointer;
  color: $color-primary;
  font-size: 1em;
}

.main-button {
  font-family: $main-font;
  padding: 10px;
  transform: translatey(0px);
  animation: float 6s ease-in-out infinite;
  outline: none;
  box-shadow: none;
  font-size: 1.5rem;
  font-weight: bold;
  -webkit-transform: translatey(0px);
  -webkit-animation: float 6s ease-in-out infinite;
}

.phase {

  font-family: $main-font;
  padding: 10px;
  transform: translatey(0px);
  outline: none;
  box-shadow: none;
  font-size: 1.5rem;
  font-weight: bold;
  -webkit-transform: translatey(0px);
  animation: float-phase 6s ease-in-out infinite !important;
  -webkit-animation: float-phase 6s ease-in-out infinite !important;

}
</style>
