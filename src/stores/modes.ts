import {defineStore} from "pinia";
import Game from "@/customTypes/game";
import Mode from "@/customTypes/mode";


export const modes = defineStore('user', {
    state: () => ({

        arrayModes: [
            {
                name: 'easy',
                maxLives: 5
            },
            {
                name: 'medium',
                maxLives: 3
            }, {
                name: 'hard',
                maxLives: 1
            },

        ] as Array<Mode>,
        currentGame: null as Game | null
    }),

})
