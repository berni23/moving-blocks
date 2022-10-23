import {defineStore} from "pinia";
import Game from "@/customTypes/game";


export const useGamesStore = defineStore('user', {
    state: () => ({
        finishedGames : [] as Array<Game>,
        currentGame: null as Game|null
    }),

    actions: {
        removeCurrentGame(){
            this.currentGame = null
        },
        addGameToFinishedGames(game:Game){
            this.finishedGames.push(game);
        }
    }
})
