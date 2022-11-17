<template>
  <div v-if="shouldAppear" class="diamond sprite-diamond" :class="['isStatus'?'status-coin':'']"
       :style="{'width':size,'height':size, 'marginLeft':marginLeft,'marginTop':marginTop,'backgroundImage':bgImage}">
  </div>
</template>
<script lang="ts">
import {defineComponent, onMounted, reactive} from "vue";
import {useGamesStore} from "@/stores/games";
import applySpriteLogic from "@/Logic/Game/UseCases/ApplySpriteLogic";
import {bH2, diamondWidthPixels, gameWidth} from "@/Logic/Game/constraints";
import ElementSprite from "@/customTypes/elementSprite";
import {diamondSprite} from "@/Logic/Game/Utils/SpriteImages";

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
    const element = reactive({offsetTop: props.offsetTop, offsetLeft: gameWidth(), radius: bH2} as ElementSprite);

    const localCbCollision = () => {
      gameStore.increaseCoins(3);
      gameStore.removeNthSprite(props.id)
    }

    return {
      bgImage: diamondSprite(),
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
  background-image: url("/public/images/diamonds/diamond0.png");
  background-repeat: no-repeat;
  //transform: scale(1.5);
  //width: 50px;
  //height: 50px;
}

</style>
