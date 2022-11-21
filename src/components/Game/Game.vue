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

import {computed, defineComponent, onMounted, ref} from 'vue';
import Buttons from "@/components/Buttons/Buttons.vue";
import MainHeader from "@/views/MainHeader.vue";
import CustomButton from "@/components/Buttons/CustomButton.vue";
import {useGamesStore} from '@/stores/games';
import ModeComponent from "@/components/Game/Mode.vue";
import startGame from "@/Logic/Game/UseCases/StartGame";
import GameContent from "@/components/Game/GameContent.vue";
import Status from "@/components/Status/Status.vue";
import Player from "@/components/Sprites/Player.vue";
import box from "@/components/Sprites/box.vue";
import {gHeight} from "@/Logic/Game/constraints";
import {intToPix} from "@/Logic/Game/Utils/pixelConv";
import NameToComponentConversor from "@/Logic/Game/Services/NameToComponentConversor";
import {useUsersStore} from "@/stores/users";
import User from "@/customTypes/user";
import {useRouter} from "vue-router";

export default defineComponent({
      name: 'Game',
      components: {Player, Status, GameContent, CustomButton, MainHeader, Buttons, ModeComponent},
      setup(props, {emit}) {
        const gamesStore = useGamesStore();
        const router = useRouter();
        const usersStore = useUsersStore();
        const user = ref<User | null>(usersStore.currentUser);
        const arraySprites = computed(() => gamesStore.currentSprites);
        const gameHasStarted = computed(() => gamesStore.gameIsOngoing);
        const countdownText = ref('' as string | null);
        onMounted(() => {
          if (!user.value) router.push('new-user')
          else startGame(countdownText)
        });
        return {
          componentFromString: NameToComponentConversor,
          gameHasStarted,
          box,
          arraySprites,
          height: intToPix(gHeight),
          countdownText
        }
      }
    }
)
;
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
