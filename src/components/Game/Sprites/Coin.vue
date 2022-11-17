<template>
  <div v-if="shouldAppear" class="coin sprite-coin" :class="['isStatus'?'status-coin':'']"
       :style="{'marginLeft':marginLeft,'marginTop':marginTop,'backgroundImage':bgImage}">
  </div>
</template>
<script lang="ts">
import {defineComponent, reactive} from "vue";
import {useGamesStore} from "@/stores/games";
import applySpriteLogic from "@/Logic/Game/UseCases/ApplySpriteLogic";
import {bH2, gameWidth} from "@/Logic/Game/constraints";
import ElementSprite from "@/customTypes/elementSprite";
import {coinSprite} from "@/Logic/Game/Utils/SpriteImages";

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
  setup(props) {


    const gameStore = useGamesStore();
    const element = reactive({offsetTop: props.offsetTop, offsetLeft: gameWidth(), radius: bH2} as ElementSprite);

    const localCbCollision = () => {
      gameStore.increaseCoins();
      gameStore.removeNthSprite(props.id)
    }

    return {bgImage: coinSprite(), ...applySpriteLogic(props.id, element, localCbCollision)}
  }
})
</script>
<style lang='scss'>

.status-coin {
  position: relative !important;
}


.sprite-coin {
  position: absolute !important;
}

</style>
