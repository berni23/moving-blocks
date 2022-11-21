<template>


  <div class="navigation">
    <q-layout view="lHh lpr lFf" container style="height:60px" class="rounded-borders">
      <q-header elevated class="navigation__header">


        <q-toolbar>
          <q-breadcrumbs style="font-size: 16px">
            <!--            <q-breadcrumbs-el style="color:lightskyblue" label="Main" icon="home"/>-->


            <q-breadcrumbs-el v-for="item in toolbarItems" :key="item.name"
                              :class="[item.name===routeName?'current-item':'item']" :label="item.label"

                              @click="goTo(item.name)"
                              :icon="item.icon"/>
            <!--            <q-breadcrumbs-el label="Ranking" icon="trending_up"/>-->

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

import {defineComponent} from 'vue';

import CustomButton from "@/components/Buttons/CustomButton.vue";
import {useRoute, useRouter} from 'vue-router';

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
  components: {CustomButton},

  setup(props) {


    const route = useRoute();
    const router = useRouter();



    const goTo = (name:string)=> {router.push('/'+name)}


    const toolbarItems = [

      {
        icon: 'home',
        label: 'Main',
        name: 'home'

      },
      {
        icon: 'trending_up',
        label: 'Ranking',
        name: 'ranking'

      }
    ];

    return {goTo,showTitle:props.showTitle,title: props.title, toolbarItems, routeName: route.name}

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
  }

}


</style>
