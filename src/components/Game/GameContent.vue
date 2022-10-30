<template>
  <div class="game-content">
    <div id="myId" class="box"></div>
  </div>
</template>
<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "GameContent",
  props: {
  },
  setup(props) {
    return {}
  }
})
</script>
<style lang='scss'>

.game-content {

  width: 100%;
  height: 500px;
  margin: 20px 0;
  position: relative;


  .box{

    position:absolute;
  }

  .same-box {
    position: absolute;
    width: 50px;
    height: 50px;
  }
  .blue-box,.fast-blue-box {
    position: absolute;
    background-color: blue;
    width: 50px;
    height: 50px;
  }



}
</style>
