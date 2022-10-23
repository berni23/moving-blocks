<template>
  <button type="button" class="shadow-btn main-button" @click="buttonClick">

    {{ text }}
  </button>
</template>

<script>

import {defineComponent, ref} from "vue";
export default defineComponent({
  name: 'custom-button',
  props: {
    sound: {
      type: Boolean,
      default: true
    },
    text: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    let text = ref(props.text)
    let sound = ref(props.sound);
    function buttonClick() {
      var soundClick = document.getElementById('sound-click');
      this.$emit('click')
      if (this.sound) soundClick.play();
    }
    return {text, sound, buttonClick}
  }
})
;
</script>

<style lang="scss">

@import '../assets/scss/colors.scss';
@import '../assets/scss/fonts';
@import "../assets/scss/keyframes";

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


</style>
