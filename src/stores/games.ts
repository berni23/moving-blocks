import {defineStore} from "pinia";
import Game from "@/customTypes/game";
import Mode from "@/customTypes/mode";
import {
    arrayModes,
    gameInterval,
    initialCoordinates,
    keysDown,
    keysLeft,
    keysRight,
    keysUp,
    limitBottom,
    limitRight,
    playerHeight,
    playerWidth,
    timeDamageRecovery,
    timePowerUp
} from "@/Logic/Game/constraints";
import GameSprite from "@/customTypes/gameSprite";
import ElementSprite from "@/customTypes/elementSprite";
import {maxGames, persist} from "@/config";


// @ts-ignore
export const useGamesStore = defineStore('games', {

    persist: persist,
    state: () => ({

        _gameLoopInterval: null as number | null,
        _currentGame: null as Game | null,
        _finishedGames: [] as Array<Game>,
        _currentKey: '' as string | null,
        _iteration: 0 as number,
        _gameTimer: 0 as number,
        _timeDamage: null as number | null,
        _timePowerUp: null as number | null,
        _offsetLeft: initialCoordinates[0] as number,
        _offsetTop: initialCoordinates[1] as number,
        _arraySprites: [] as Array<GameSprite>,
        _currentSprites: [] as Array<GameSprite>
    }),

    actions: {

        applyDamage(intensity = 1) {
            if (!this._currentGame || this._timeDamage) return;
            this._currentGame.lives = Math.max(this._currentGame.lives - intensity, 0);
            this._timeDamage = setTimeout(() => {

                if (this._timeDamage) clearTimeout(this._timeDamage);

            }, timeDamageRecovery)
        },

        applyPowerUp() {
            if (this._timePowerUp) clearTimeout(this._timePowerUp);
            this._timePowerUp = setTimeout(() => {
                if (this._timePowerUp) clearTimeout(this._timePowerUp)
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

            arraySprites.forEach((sprite: GameSprite) => {
                sprite.id = this._arraySprites.length + 1;
                this.saveSprite(sprite);
            });

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
            if (this._timePowerUp) clearTimeout(this._timePowerUp);

            this._gameLoopInterval = null;
            this._timeDamage = null;
            this._timePowerUp = null;
            this._iteration = 0;
        },
        removeCurrentGame() {
            this._currentGame = null
        },
        addGameToFinishedGames(game: Game) {
            if(this._finishedGames.length>=maxGames){
                this._finishedGames.shift();
            }
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
        },


        resetGameVars() {

            //finish
            this.finishLoops();
            this._offsetLeft = initialCoordinates[0];
            this._offsetTop = initialCoordinates[1];

            //remove
            this.removeCurrentGame();
            this.removeSprites();
            this.removeCurrentKey();


        },
        finishCurrentGame() {

            if (this._currentGame) {
                //set time , finished true and add to finished games
                this._currentGame.time = this._iteration * gameInterval;

                this._currentGame.finished = true;
                this.addGameToFinishedGames(this._currentGame);

            }
            this.resetGameVars();

            //reset values to pre-game


        }
    },

    getters: {
        finishedGames: state => state._finishedGames,
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
                width: playerWidth,
                height: playerHeight
            } as ElementSprite;
        }
    }
});
