import Mode from "@/customTypes/mode";
import Game from "@/customTypes/game";

const createGame = (userId: number, mode:Mode) => {

    let game: Game = {

        mode:mode,
        userId: userId,
        timer:0
    }

    return game;
}
export default createGame;
