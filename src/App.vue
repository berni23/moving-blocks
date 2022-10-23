<template>
  <router-view/>
  <audio id="sound-click" src="sounds/accept2.mp3"></audio>
</template>

<style lang="scss">

@import './assets/scss/colors';
@import './assets/scss/fonts';


body {
  text-align: center;
  padding: 0;
  font-family: $main-font;
  max-width: 1500px;
  margin: 0 auto;
  min-height: 100vh;
  align-items: center;
  background: linear-gradient(270deg, rgba(135, 206, 250, 0) 0%, rgba(135, 206, 250, 0.6) 100%);
  background: -moz-linear-gradient(270deg, rgba(135, 206, 250, 0) 0%, rgba(135, 206, 250, 0.6) 100%);
  background: -webkit-linear-gradient(270deg, rgba(135, 206, 250, 0) 0%, rgba(135, 206, 250, 0.6) 100%);
}

.container {
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
