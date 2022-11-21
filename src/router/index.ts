import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HowToPlayView from "@/views/HowToPlayView.vue";
import NewUserView from "@/views/NewUserView.vue";
import GameView from "@/views/GameView.vue";
import TableBoardView from "@/views/TableBoardView.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
        alias:"/home"
    },

    {
        path: '/how-to-play',
        name: 'how-to-play',
        component: HowToPlayView
    },

    {
        path: '/new-user',
        name: 'new-user',
        component: NewUserView
    },
    {
        path: '/game',
        name: 'game',
        component:GameView
    } ,
    {
        path: '/ranking',
        name: 'ranking',
        props: { title: 'Ranking'},
        component:TableBoardView
    },


    {
        path: "/:catchAll(.*)", // Unrecognized path automatically matches 404
        redirect:'/'
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
