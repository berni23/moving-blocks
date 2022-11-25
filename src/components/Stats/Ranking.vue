<template>

  <div class="container ranking">
    <p class="ranking__title">{{ title }}</p>


    <div class="ranking__content">

      <q-table

          hide-pagination
          :columns="columns"
          :rows="arrayGamesForRanking"
          class="ranking__content__table">

      </q-table>

    </div>

    <!--    <div class="ranking__content">-->

    <!--      <ul class="user">-->
    <!--        <li class="user-title">-->
    <!--          users-->
    <!--        </li>-->
    <!--      </ul>-->
    <!--      <ul class="score">-->
    <!--        <li class="score-title">-->
    <!--          score-->
    <!--        </li>-->
    <!--      </ul>-->
    <!--      <ul class="time">-->
    <!--        <li class="time-title">-->
    <!--          time-->
    <!--        </li>-->
    <!--      </ul>-->
    <!--      <div class="ranking__content__game">-->
    <!--        <div class="ranking__content__game__user">-->
    <!--        </div>-->
    <!--        <div class="ranking__content__game__score">-->
    <!--        </div>-->
    <!--        <div class="ranking__content__game__time">-->
    <!--        </div>-->


    <!--      </div>-->
    <!--    </div>-->
  </div>
</template>
<script lang="ts">
import {computed, defineComponent, onBeforeMount, ref} from "vue";
import Game from "@/customTypes/game";
import {useUsersStore} from "@/stores/users";
import {millisToReadableMinAndSec} from "@/Logic/Game/Utils/timeUtils";
import resetGame from "@/Logic/Game/UseCases/ResetGame";

export default defineComponent({
  name: "ranking",
  props: {
    title: {
      type: String
    },
    arrayGames: {
      type: Array,
      default: () => []
    }

  },
  setup(props,{emit}) {
    onBeforeMount(() => resetGame())
    const arrayGames = ref(props.arrayGames as Array<Game>);
    const userStore = useUsersStore();
    const arrayGamesForRanking = computed(() => {
      return arrayGames.value.map((gameInLoop, i) => {
        if (!gameInLoop) return {match: 0, time: '0:00', user: 'unknown', coins: 0};
        const user = userStore.getUserOfId(gameInLoop.userId as number);
        let username = user ? user.name : 'unknown';


        if(!gameInLoop.id) console.log('no id',gameInLoop);
        let match = (gameInLoop.id).toString();
        let time = millisToReadableMinAndSec(gameInLoop.time);
        return {match, time, username, coins: gameInLoop.coins}
      }).sort((game1, game2) => (game1.coins > game2.coins) ? -1 : 1);
    });

    const columns = [

      {
        name: 'match',
        align: 'center',
        label: 'match ',
        field: 'match',
        required: true,
      },

      {
        name: 'user',
        align: 'center',
        label: 'user',
        field: 'username',
        required: true,
      },

      {
        name: 'time',
        align: 'center',
        label: 'time ',
        field: 'time',
        required: true,
      },

      {
        name: 'coins',
        align: 'center',
        label: 'score',
        field: 'coins',
        required: true,
      }
    ];
    return {columns, arrayGamesForRanking, title: props.title};
  }
})
</script>
<style lang='scss'>

@import './src/assets/scss/colors';
@import './src/assets/scss/fonts';

.ranking {
  flex: 1;
  margin: 30px;
  padding: 20px;
  display: flex;
  flex-direction: column;

  font-family: $main-font;

  &__content {
    font-weight: normal !important;
    display: flex;
    flex-direction: row;

    &__table {
      font-family: $second-font;
      thead {
        background-color: whitesmoke;
      }

      tbody {
        font-family: $second-font-light;

      }

      width: 100%
    }

    &__game {
      display: flex;
      flex-direction: row;


    }
  }

  li {

    margin: 10px;
  }

  &__title {

    font-size: 30px;
  }


  .user,
  .score,
  .time {

    font-family: serif;
  }

  .user-title,
  .score-title,
  .time-title {

    border: 1px solid $color-primary;
    padding: 5px;;
  }

}


</style>

