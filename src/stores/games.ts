import {defineStore} from "pinia";
import Game from "@/customTypes/game";
import Mode from "@/customTypes/mode";


export const useGamesStore = defineStore('user', {
    state: () => ({
        finishedGames: [] as Array<Game>,
        currentGame: null as Game | null,
        arrayModes: [
            {
                name: 'easy',
                maxLives: 5
            } as Mode,
            {
                name: 'medium',
                maxLives: 3
            }as Mode , {
                name: 'hard',
                maxLives: 1
            } as Mode,
        ] as Array<Mode>,

    }),

    actions: {
        removeCurrentGame() {
            this.currentGame = null
        },
        addGameToFinishedGames(game: Game) {
            this.finishedGames.push(game);
        },

        modeOfName(name: string): Mode|null {
            return this.arrayModes.find((mode) => mode.name === name) as Mode|null
        },
    },

    getters: {}
})
