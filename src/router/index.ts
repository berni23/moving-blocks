import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GameView from "@/views/GameView.vue";
import TableBoardView from "@/views/TableBoardView.vue";
import ChooseModeView from "@/views/ChooseModeView.vue";
import ControlsView from "@/views/ControlsView.vue";
import UserView from "@/views/UserView.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
        alias: "/home"
    },
    {
        path: '/user',
        name: 'user',
        component: UserView
    },
    {
        path: '/game/:mode',
        name: 'game',
        component: GameView
    },
    {
        path: '/ranking',
        name: 'ranking',
        props: {title: 'Ranking'},
        component: TableBoardView
    },
    {
        path: '/choose-mode',
        name: 'choose-mode',
        component: ChooseModeView
    },
    {
        path: '/controls',
        name: 'controls',
        component: ControlsView
    },

    {
        path: "/:catchAll(.*)", // Unrecognized path automatically matches 404
        redirect: '/'
    },
]

const
    router = createRouter({
        history: createWebHistory(process.env.BASE_URL),
        routes
    });


export default router
