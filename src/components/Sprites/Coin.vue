<template>
  <div v-if="shouldAppear" class="coin sprite-coin"
       :style="{'width':size,'height':size, 'marginLeft':marginLeft,'marginTop':marginTop}">

    <img
        src='/images/coins/coin.gif'
        :style="{'width':size, 'height':size}" alt="coin"/>
  </div>
</template>
<script lang="ts">
import {defineComponent, reactive} from "vue";
import {useGamesStore} from "@/stores/games";
import applySpriteLogic from "@/Logic/Game/UseCases/ApplySpriteLogic";
import {coinSize, coinWidthPixels, gameWidth} from "@/Logic/Game/constraints";
import ElementSprite from "@/customTypes/elementSprite";
import removeSprite from "@/Logic/Game/UseCases/removeSprite";

export default defineComponent({
  name: "Coin",
  props: {
    id: {
      type: Number,
      default: 0
    },
    offsetTop: {
      type: Number
    }
  },
  setup(props,{emit}) {
    const gameStore = useGamesStore();
    const element = reactive({
      offsetTop: props.offsetTop,
      offsetLeft: gameWidth(),
      width: coinSize,
      height: coinSize,
    } as ElementSprite);
    const localCbCollision = () => {
      gameStore.increaseCoins();
      removeSprite(props.id)
    }

    return {size: coinWidthPixels, ...applySpriteLogic(props.id, element, localCbCollision)}
  }
})
</script>
<style lang='scss'>

.coin {
  position: absolute;
  //background-image: url("/public/images/coins/coin_0.png");

}

.status-coin {
  position: relative !important;
}

.sprite-coin {
  position: absolute !important;
}

</style>
