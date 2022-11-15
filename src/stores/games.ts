import {defineStore} from "pinia";
import Game from "@/customTypes/game";
import Mode from "@/customTypes/mode";
import {nextCFrame, nextHFrame} from "@/Logic/Game/Utils/frames";
import {arrayModes, gameInterval} from "@/Logic/Game/constraints";


// @ts-ignore
export const useGamesStore = defineStore('user', {
    state: () => ({

        _gameLoopInterval: null as number | null,
        _currentGame: null as Game | null,
        _finishedGames: [] as Array<Game>,
        _currentKey: '' as string,
        _intHFrames: 0 as number,
        _intCFrames: 0 as number,
        _iteration: 0 as number,
        _gameTimer: 0 as number,
        _hFrame: 0 as number,
        _cFrame: 0 as number,
        _offsetLeft: 0,
        _offsetRight: 0
    }),

    actions: {

        //
        // setOffsets(offsetLeft, offsetRight) {
        //
        //     this._offsetLeft = offsetLeft;
        //     this._offsetRight = offsetRight
        //
        // },
        initializeLoops() {
            this._intHFrames = setInterval(() => this._hFrame = nextHFrame(this._hFrame), 500);
            this._intCFrames = setInterval(() => this._cFrame = nextCFrame(this._cFrame), 200);
            this._gameLoopInterval = setInterval(() => this._iteration++, gameInterval);
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
            return arrayModes.find((mode) => mode.name === name) as Mode | null
        },

        setCurrentGame(game: Game | null) {
            this._currentGame = Object.assign({}, game);
        },

        setCurrentKey(key: string) {
            this._currentKey = key
        },

        removeCurrentKey() {
            this._currentKey = ''
        }

    },

    getters: {
        gameHasStarted: state => state._currentGame ? state._currentGame.started : false,
        currentGame: state => state._currentGame,
        iteration: state => state._iteration,
        currentKey: state => state._currentKey,
        hFrame: state => state._hFrame,
        cFrame: state => state._cFrame
    }
})
