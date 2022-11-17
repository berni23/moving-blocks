import {defineStore} from "pinia";
import Game from "@/customTypes/game";
import Mode from "@/customTypes/mode";
import {
    arrayModes,
    bH2,
    gameInterval,
    keysDown,
    keysLeft,
    keysRight,
    keysUp,
    limitBottom,
    limitRight,
    timeDamageRecovery,
    timePowerUp
} from "@/Logic/Game/constraints";
import GameSprite from "@/customTypes/gameSprite";
import ElementSprite from "@/customTypes/elementSprite";


// @ts-ignore
export const useGamesStore = defineStore('games', {
    state: () => ({

        _gameLoopInterval: null as number | null,
        _currentGame: null as Game | null,
        _finishedGames: [] as Array<Game>,
        _currentKey: '' as string | null,
        _iteration: 0 as number,
        _gameTimer: 0 as number,
        _timeDamage: null as number | null,
        _timePowerUp: null as number | null,
        _offsetLeft: 0 as number,
        _offsetTop: 0 as number,
        _arraySprites: [] as Array<GameSprite>,
        _currentSprites: [] as Array<GameSprite>
    }),

    actions: {

        applyDamage(intensity = 1) {
            if (!this._currentGame || this._timeDamage) return;
            this._currentGame.lives = Math.max(this._currentGame.lives - intensity, 0);
            this._timeDamage = setTimeout(() => {

                this._timeDamage = null;
            }, timeDamageRecovery)
        },

        applyPowerUp() {
            if (this._timePowerUp) clearTimeout(this._timePowerUp);
            this._timePowerUp = setTimeout(() => {
                this._timePowerUp = null;
            }, timePowerUp)
            if (this._timeDamage) clearTimeout(this._timeDamage);

        },

        increaseCoins(value = 1) {
            (this._currentGame as Game).coins += value;

        },
        removeSprites() {
            this._arraySprites = [];
            this._currentSprites = [];
        },
        setOffsetLeft(offsetLeft: number) {
            this._offsetLeft = offsetLeft
        },
        saveSprite(sprite: GameSprite) {
            sprite.id = this._arraySprites.length + 1;
            this._arraySprites.push(sprite);
        },

        saveArraySprites(arraySprites: Array<GameSprite>) {
            this._currentSprites = this._currentSprites.concat(arraySprites);
        },

        displaySprite(sprite: GameSprite) {
            this._currentSprites.push(sprite);
        },

        removeNthSprite(n: number) {
            // this._currentSprites.splice(n, 1);
            let index = this._currentSprites.findIndex(sprite => sprite.id == n);
            if (!index) return;
            this._currentSprites.splice(index, 1);
        },
        setOffsetTop(offsetTop: number) {
            this._offsetTop = offsetTop
        },
        initializeLoops() {
            this._gameLoopInterval = setInterval(() => this._iteration++, gameInterval);
        },
        startCurrentGame() {
            let game = Object.assign(this._currentGame as Game, {});
            game.started = true;
            this._currentGame = game;
        },
        finishLoops() {
            if (this._gameLoopInterval) clearInterval(this._gameLoopInterval);
            if (this._timeDamage) clearTimeout(this._timeDamage);
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
        currentGame: state => state._currentGame,
        iteration: state => state._iteration,
        isBouncingDamage: state => Boolean(state._timeDamage),
        isPowerUp: state => Boolean(state._timePowerUp),
        currentKey: state => state._currentKey,
        offsetLeft: state => state._offsetLeft,
        offsetTop: state => state._offsetTop,
        goUp: state => keysUp.includes(state._currentKey as string) && state._offsetTop >= 0,
        goDown: state => keysDown.includes(state._currentKey as string) && state._offsetTop <= limitBottom,
        goRight: state => keysRight.includes(state._currentKey as string) && state._offsetLeft <= limitRight(),
        goLeft: state => keysLeft.includes(state._currentKey as string),
        gameIsOngoing: state => state._currentGame && state._currentGame.started && !state._currentGame.finished,
        currentLives: state => state._currentGame ? state._currentGame.lives : 0,
        currentCoins: state => state._currentGame ? state._currentGame.coins : 0,
        elementPlayer: state => {
            return {
                offsetLeft: state._offsetLeft,
                offsetTop: state._offsetTop,
                radius: bH2
            } as ElementSprite;
        }
    }
});
