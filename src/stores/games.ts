import {defineStore} from "pinia";
import Game from "@/customTypes/game";
import Mode from "@/customTypes/mode";
import {nextCFrame, nextHFrame} from "@/Logic/Game/Utils/frames";
import {
    arrayModes,
    gameInterval,
    keysDown,
    keysLeft,
    keysRight,
    keysUp,
    limitBottom,
    limitRight,
    marginGame
} from "@/Logic/Game/constraints";
import {DefineComponent} from "vue";
import GameSprite from "@/customTypes/gameSprite";


export const useGamesStore = defineStore('games', {
    state: () => ({

        _gameLoopInterval: null as number | null,
        _currentGame: null as Game | null,
        _finishedGames: [] as Array<Game>,
        _currentKey: '' as string | null,
        _intHFrames: 0 as number,
        _intCFrames: 0 as number,
        _iteration: 0 as number,
        _gameTimer: 0 as number,
        _hFrame: 0 as number,
        _cFrame: 0 as number,
        _offsetLeft: 0,
        _offsetTop: 0,
        _arraySprites: [] as Array<GameSprite>,
        _currentSprites: [] as Array<GameSprite>
    }),

    actions: {
        setOffsetLeft(offsetLeft: number | null) {
            if (!offsetLeft) return;
            this._offsetLeft = offsetLeft
        },
        pushSprite(sprite: GameSprite) {
            this._arraySprites.push(sprite);
        },

        pushCurrentSprite(sprite: GameSprite) {

            this._currentSprites.push(sprite);
        },

        removeNthSprite(n: number) {
            this._currentSprites.splice(n, 1);
        },
        setOffsetTop(offsetTop: number) {
            this._offsetTop = offsetTop
        },
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

        setCurrentKey(value: string) {
            this._currentKey = value
        },

        removeCurrentKey() {
            this._currentKey = ''
        }
    },

    getters: {
        arraySprites: state => state._arraySprites,
        currentSprites: state => state._currentSprites,
        gameHasStarted: state => state._currentGame ? state._currentGame.started : false,
        currentGame: state => state._currentGame,
        iteration: state => state._iteration,
        currentKey: state => state._currentKey,
        hFrame: state => state._hFrame,
        cFrame: state => state._cFrame,
        offsetLeft: state => state._offsetLeft,
        offsetTop: state => state._offsetTop,
        goUp: state => keysUp.includes(state._currentKey as string) && state._offsetTop > marginGame,
        goDown: state => keysDown.includes(state._currentKey as string) && state._offsetTop < limitBottom,
        goRight: state => keysRight.includes(state._currentKey as string) && state._offsetLeft < limitRight,
        goLeft: state => keysLeft.includes(state._currentKey as string) && state._offsetLeft > marginGame,
    }
})
