import {defineStore} from "pinia";
import Game from "@/customTypes/game";
import Mode from "@/customTypes/mode";
import {nextCFrame, nextHFrame} from "@/Logic/Game/Utils/frames";


// @ts-ignore
export const useGamesStore = defineStore('user', {
    state: () => ({
        _finishedGames: [] as Array<Game>,
        _currentGame: null as Game | null,
        _arrayModes: [
            {
                name: 'easy',
                maxLives: 5
            } as Mode,
            {
                name: 'medium',
                maxLives: 3
            } as Mode, {
                name: 'hard',
                maxLives: 1
            } as Mode,
        ] as Array<Mode>,

        _intHFrames: 0 as number,
        _intCFrames: 0 as number,
        _hFrame: 0 as number,
        _cFrame: 0 as number

    }),

    actions: {
        initializeLoops() {
            this._intHFrames = setInterval(() => this._hFrame = nextHFrame(this._hFrame), 500);
            this._intCFrames = setInterval(() => this._cFrame = nextCFrame(this._cFrame), 200);
        },
        startCurrentGame() {
            (this.currentGame as Game).started = true;
        },
        finishLoops() {
            clearInterval(this._hFrame);
        },
        removeCurrentGame() {
            this._currentGame = null
        },
        addGameToFinishedGames(game: Game) {
            this._finishedGames.push(game);
        },
        modeOfName(name: string): Mode | null {
            return this._arrayModes.find((mode) => mode.name === name) as Mode | null
        },

        setCurrentGame(game: Game | null) {
            this._currentGame = Object.assign({}, game);
        }
    },

    getters: {
        currentGame: state => state._currentGame,
        gameHasStarted: state => state._currentGame ? state._currentGame.started : false,
        hFrame: state => state._hFrame,
        cFrame: state => state._cFrame
    }
})
