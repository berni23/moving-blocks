<template>
  <div v-if="shouldAppear" class="diamond sprite-diamond" :class="['isStatus'?'status-coin':'']"
       :style="{'width':size,'height':size, 'marginLeft':marginLeft,'marginTop':marginTop}">

    <img :style="{'width':size,'height':size}"  src='images/diamonds/diamond.gif' alt=" diamond"/>
  </div>
</template>
<script lang="ts">
import {defineComponent, onMounted, reactive} from "vue";
import {useGamesStore} from "@/stores/games";
import applySpriteLogic from "@/Logic/Game/UseCases/ApplySpriteLogic";
import {diamondWidthPixels, gameWidth} from "@/Logic/Game/constraints";
import ElementSprite from "@/customTypes/elementSprite";

export default defineComponent({
  name: "Diamond",
  props: {
    id: {
      type: Number,
      default: 0
    },
    offsetTop: {
      type: Number
    }
  },
  setup(props) {

    onMounted(() => console.log('diamond mounted!'));
    const gameStore = useGamesStore();
    const element = reactive({offsetTop: props.offsetTop, offsetLeft: gameWidth()} as ElementSprite);
    const localCbCollision = () => {
      gameStore.increaseCoins(3);
      gameStore.removeNthSprite(props.id)
    }

    return {
      size: diamondWidthPixels, ...applySpriteLogic(props.id, element, localCbCollision)
    }
  }
})
</script>
<style lang='scss'>


.sprite-diamond {
  position: absolute !important;
}


.diamond {
  position: absolute;
  background-repeat: no-repeat;

}

</style>
