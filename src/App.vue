<template>
  <router-view/>
</template>


<script lang="ts">


import {defineComponent,} from "vue";

export default defineComponent({

  name: "App",
  setUp() {

  }

});

</script>

<style lang="scss">

@import './assets/scss/colors';
@import './assets/scss/fonts';


.hidden {

}

body {

  font-family: $main-font;
  min-height: 100vh !important;
  overflow-y: hidden;
  height: 100% !important;
  align-items: center !important;
  text-align: center !important;
  margin: 0 auto !important;
  padding: 0 !important;
  background: linear-gradient(270deg, rgba(135, 206, 250, 0) 0%, rgba(135, 206, 250, 0.6) 100%) no-repeat;
  background: -moz-linear-gradient(270deg, rgba(135, 206, 250, 0) 0%, rgba(135, 206, 250, 0.6) 100%);
  background: -webkit-linear-gradient(270deg, rgba(135, 206, 250, 0) 0%, rgba(135, 206, 250, 0.6) 100%);
  background-repeat: no-repeat;
}

.container {
  background-color: $main-bg-color;
  border-radius: 15px;
  box-shadow: 0 0 10px $color-primary;
  color: $color-primary-dark;
  margin: 20px;

}

.main-container {
  justify-content: center !important;
  display: flex !important;
  height: 100% !important;
  //width: 90vw!important;
  align-items: center;
  text-align: center;
  min-height: 50vh;


  position:relative;
  background-color: $main-bg-color;
  border-radius: 15px;
  box-shadow: 0 0 10px $color-primary;
  color: $color-primary-dark;
}



.q-notify{

  font-family: Roboto,serif!important;
}

.q-menu .q-position-engine .q-menu--square .q-transition--fade-leave-active .q-transition-Sfade-leave-to {

  font-family: $second-font!important;
}
</style>
