<template>

  <main-header/>
  <section class="how-to-play container">


    <img
        v-if="image"
        class="how-to-play__image"
        :src="image"
        :style="{width:size.width, height:size.height}" :alt="image"/>

    <div class="how-to-play__tutorial">
      <p>{{ prompt }}</p>
    </div>
    <div class="how-to-play__buttons">
      <custom-button class="btn-1" v-if="lastStep" id="tutorial-back" @clicked="toMain" :text="'back to main'"/>
      <custom-button class="btn-2" v-else id="tutorial-next" @clicked="next" :text="'next'"/>
    </div>
  </section>
</template>

<script lang="ts">
import {computed, defineComponent, ref} from "vue";
import {useRouter} from "vue-router";
import CustomButton from "@/components/Buttons/CustomButton.vue";
import MainHeader from "@/views/MainHeader.vue";
import Box from "@/components/Sprites/box.vue";
import {boxWidthPixels, playerHeightPixels, playerWidthPixels} from "@/Logic/Game/constraints";

export default defineComponent({
  name: 'HowToPlay',
  components: {MainHeader, CustomButton, Box},
  setup(props,{emit}) {

    const step = ref(0 as number)


    const router = useRouter();
    const arrayPrompts = ref([
      'Use the W/S/D/A keys in order to move up, down,right and left respectively',
      'Try to obtain the maximum amount of coins possible',
      'Avoid aliens! they will damage your spaceship',
      'Space Powerups! catch them and you will become invencible for some time',
      'NOW GO OUT THERE AND SMASH YOUR KEYBOARD!'

    ]);

    const images = ref([
      '/images/player.gif',
      '/images/coins/coin.gif',
      '/images/alien.gif',
      '/images/powerUp.gif',
      '', ''

    ]);

    const imageSizes = ref([
      {width:playerWidthPixels,height: playerHeightPixels},
      {width:boxWidthPixels,height: boxWidthPixels},
      {width:boxWidthPixels,height: boxWidthPixels},
      {width:boxWidthPixels,height: boxWidthPixels},

    ]);

    const image = computed(() => images.value[step.value]);
    const size = computed(() => imageSizes.value[step.value]);

    const next = () => {
      if (step.value >= (arrayPrompts.value.length - 1)) step.value = 0;
      else step.value = step.value + 1;
    }
    const toMain = () => router.push('/');
    const prompt = computed(() => arrayPrompts.value[step.value]);
    const lastStep = computed(() => (arrayPrompts.value.length - 1) === step.value);

    return {step, next, toMain, prompt, lastStep, size, image}


  }
})

</script>

<style lang="scss">


.how-to-play {

  margin-top: 20px;
  height: 50vh;

  &__image{
    margin:20px;
  }

  &__tutorial {
    display: flex;
    height: 30vh;
    text-align: center;
    align-items: center;
    justify-content: center;

    p {

      font-family: serif;
      padding: 10px;
      font-size: 40px;

    }
  }


  &__buttons {

    display: flex;
    flex-direction: column;
    align-items: center
  }


}


</style>
