<template>
  <router-view/>
</template>

<style lang="scss">


@import './assets/scss/colors';
:root {
  --main-bg-color: $main-bg-color;
  --container-bg-color: white;
  --color-primary: lightskyblue;
  --color-primary-dark: rgb(61, 159, 219);
}


@font-face {
  font-family: 'headerFont';
  src: url("assets/fonts/pdark.woff");
}

</style>
