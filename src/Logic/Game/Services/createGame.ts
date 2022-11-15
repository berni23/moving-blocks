import Mode from "@/customTypes/mode";
import Game from "@/customTypes/game";

const createGame = (userId: number|null, mode: Mode):Game => {
    return {
        mode: mode,
        userId: userId,
        lives: mode.maxLives,
        started: false,
        finished: false,
        time: 0, //seconds
        coins:0
    } as Game;
}
export default createGame;
