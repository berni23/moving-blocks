<template>

  <main-header/>
  <section class="how-to-play container">

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
import CustomButton from "@/components/CustomButton.vue";
import MainHeader from "@/views/MainHeader.vue";

export default defineComponent({
  name: 'HowToPlayView',
  components: {MainHeader, CustomButton},
  setup(props) {

    const step = ref(0 as number)
    const router = useRouter();
    const arrayPrompts = ref([
      'Use the W/S/D/A keys in order to move up, down,right and left respectively',
      'Try to obtain the maximum amount of coins possible',
      'If you hit a blue box, you will lose one life',
      'If you hit  a box with the same color as yours, you will not lose life for a while',
      'NOW GO OUT THERE AND SMASH YOUR KEYBOARD!'

    ]);

    const next = () => {
      if (step.value >= (arrayPrompts.value.length - 1)) step.value = 0;
      else step.value = step.value + 1;
      console.log('executing function', step.value);
    }
    const toMain = () => router.push('/');
    const prompt = computed(() => arrayPrompts.value[step.value]);
    const lastStep = computed(() => (arrayPrompts.value.length - 1) === step.value);

    return {step, next, toMain, prompt, lastStep}


  }
})

</script>

<style lang="scss">


.how-to-play {

  margin-top:20px;

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
