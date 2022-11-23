<template>
  <div>
    <h1 id="count-down" v-if="!gameHasStarted">{{ countdownText }}</h1>
    <div class="game-wrapper" v-if="gameHasStarted">
      <status/>
      <div class="game container" :style="{'height':height}">


        <player/>

        <div v-if=arraySprites.length v-for='sprite in arraySprites' :key="sprite?sprite.id:0">
          <component v-if='sprite && sprite.component' :offsetTop='sprite.offsetTop' :id=sprite.id
                     :is="componentFromString(sprite.component)"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">

import {computed, defineComponent, onBeforeMount, onBeforeUnmount, ref} from 'vue';
import Buttons from "@/components/Buttons/Buttons.vue";
import MainHeader from "@/views/MainHeader.vue";
import CustomButton from "@/components/Buttons/CustomButton.vue";
import ModeComponent from "@/components/Game/Mode.vue";
import GameContent from "@/components/Game/GameContent.vue";
import Status from "@/components/Status/Status.vue";
import Player from "@/components/Sprites/Player.vue";
import {useRoute, useRouter} from "vue-router";
import {useGamesStore} from '@/stores/games';
import {useUsersStore} from '@/stores/users';
import User from '@/customTypes/user';
import startGame from '@/Logic/Game/UseCases/StartGame';
import NameToComponentConversor from '@/Logic/Game/Services/Conversors/NameToComponentConversor';
import {intToPix} from '@/Logic/Game/Utils/pixelConv';
import {gHeight} from '@/Logic/Game/constraints';
import createGameWithMode from '@/Logic/Game/UseCases/CreteGameWithMode';
import Background from "@/components/background.vue";
import resetGame from "@/Logic/Game/UseCases/ResetGame";

export default defineComponent({

      name: 'Game',
      components: {Background, Player, Status, GameContent, CustomButton, MainHeader, Buttons, ModeComponent},
      setup(props, {emit}) {



        const route = useRoute();
        const router = useRouter();
        const gamesStore = useGamesStore();
        const usersStore = useUsersStore();
        const user = ref<User | null>(usersStore.currentUser);
        const arraySprites = computed(() => gamesStore.currentSprites);
        const gameHasStarted = computed(() => gamesStore.gameIsOngoing);
        const countdownText = ref('' as string | null);


        onBeforeMount(() => {
          if (!user.value) router.push('/new-user')
          else if (!route.params.mode || gamesStore.currentGame) {
            // resetGame();
            router.push('/choose-mode');
          } else {

            const modeString = typeof route.params.mode == 'string' ? route.params.mode : 'easy'
            createGameWithMode(modeString);
            startGame(countdownText,modeString)

          }

        });

        onBeforeUnmount(()=>resetGame())

        return {
          componentFromString: NameToComponentConversor,
          gameHasStarted,
          arraySprites,
          height: intToPix(gHeight),
          countdownText
        }
      }
    }
);
</script>
<style lang="scss">

@import 'src/assets/scss/keyframes';
@import 'src/assets/scss/colors';


#count-down {

  color: $color-primary;
}

.game-wrapper {
  position: relative;

  .heart {
    width: 30px;
    height: 30px;
  }


  .game {
    position: relative;

    overflow: hidden !important;
  }


  .box {

    position: absolute !important;
  }

  .same-box {
    position: absolute;
  }

  .blue-box, .fast-blue-box {
    position: absolute;
    background-color: blue;
  }

}
</style>
