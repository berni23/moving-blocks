<template>

  <audios/>
  <div class="navigation">
    <q-layout view="lHh lpr lFf" container style="height:60px" class="rounded-borders">
      <q-header elevated class="navigation__header">
        <q-toolbar>
          <q-breadcrumbs style="font-size: 16px">
            <q-breadcrumbs-el v-for="item in toolbarItems" :key="item.name"
                              class="toolbar-item"
                              :class="[item.name===routeName?'current-item':'item']" :label="item.label"
                              @click="goTo(item.name)"
                              :icon="item.icon"/>


            <!--            <q-breadcrumbs-el class="toolbar-item" label="store" icon="store" @click="clearStore"/>-->

          </q-breadcrumbs>
        </q-toolbar>
      </q-header>

    </q-layout>
  </div>


  <header class="main-header" v-if="showTitle">

    <p class="main-header__title">{{ title }}</p>
  </header>
</template>

<script lang="ts">

import {defineComponent, ref} from 'vue';

import CustomButton from "@/components/Buttons/CustomButton.vue";
import {useRoute, useRouter} from 'vue-router';
import Audios from "@/components/Common/Audios.vue";
import {useUsersStore} from "@/stores/users";
import {useGamesStore} from '@/stores/games';

export default defineComponent({
  name: "main-header",

  props: {
    title: {
      type: String,
      default: 'Sky Crash'
    },

    showTitle: {
      type: Boolean,
      default: true
    }
  },
  components: {Audios, CustomButton},

  setup(props,{emit}) {


    const route = useRoute();
    const router = useRouter();
    const title = ref(props.title);
    const goTo = (name: string) => {
      router.push('/' + name)
    }


    const toolbarItems = [

      {
        icon: 'home',
        label: 'Main',
        name: 'home'

      },     {
        icon: 'person',
        label: 'user',
        name: 'user'

      },
      {
        icon: 'trending_up',
        label: 'Ranking',
        name: 'ranking'

      }, {
        icon: 'sports_esports',
        label: 'Controls',
        name: 'controls'

      }
    ];


    let userStore = useUsersStore();
    let gameStore = useGamesStore();

    const clearStore = () => {
      gameStore.$reset();
      userStore.$reset();
      console.log('clearing store');
    }

    return {goTo, showTitle: props.showTitle, title, toolbarItems, routeName: route.name, clearStore}

  }
});
</script>
<style lang="scss">

@import '../assets/scss/colors';
@import '/src/assets/scss/fonts';

.navigation {
  font-size: .8rem !important;
  font-family: $second-font;

  &__header {

    background-color: white !important;
    color: $color-primary !important;
  }

  .item {
    color: $color-primary !important;

  }

  .toolbar-item {
    cursor: pointer;
  }

  .current-item {
    color: $color-primary-dark !important;

  }
}

.main-header {
  height: 100px;
  //margin-top: 5%;
  justify-content: center;
  align-items: center;
  text-align: center;


  &__title {
    font-size: 5em;
    //margin-top: 50px;
    display: inline-block;
    //width: 100%;
    text-align: center;
    position: relative;
    color: $color-primary;

    font-family: $main-font;
  }

}


</style>
