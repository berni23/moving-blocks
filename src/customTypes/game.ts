import Mode from "@/customTypes/mode";

export default interface Game {
    mode: Mode
    userId: number|null,
    timer: number
    started: boolean
    finished: boolean,
    lives: number,
    coins: number
}

