<template>
  <router-view/>
  <audio id="sound-click" src="sounds/accept2.mp3"></audio>
</template>

<style lang="scss">

@import './assets/scss/colors';
@import './assets/scss/fonts';


body {

  font-family: $main-font!important;
  min-height: 100vh!important;
  align-items: center;
  text-align: center;
  max-width: 1500px;
  margin: 0 auto;
  padding: 0;
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
}

.main-container {
  justify-content: center!important;
  display: flex!important;
  height: 100%!important;
  width: 100%!important;
  margin-top: 20px;
  align-items: center;
  text-align: center;
  min-height: 50vh;

  background-color: $main-bg-color;
  border-radius: 15px;
  box-shadow: 0 0 10px $color-primary;
  color: $color-primary-dark;
}

.main-header {
  position: relative;
  width: 100%;
  height: 200px;
  margin-top: 5%;
  justify-content: center;
  align-items: center;
  text-align: center;
}


</style>
