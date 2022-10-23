import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import HomeView from '../views/HomeView.vue'

import HowToPlayView from "@/views/HowToPlayView.vue";
import NewUserView from "@/views/NewUserView.vue";
import GameView from "@/views/GameView.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: HomeView
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
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
