<template>
  <header class="main-header container">
    <p class="title">Sky Crash</p>
  </header>
</template>

<script lang="ts">
export default {
  name: "main-header"
}
</script>
<style lang="scss">

@import '../assets/scss/colors';

.main-header {
  height: 200px;
  //margin-top: 5%;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-size: 5em;
  margin-top: 50px;
  display: inline-block;
  //width: 100%;
  text-align: center;
  position: relative;
  color: $color-primary;
}
</style>
