import Mode from "@/customTypes/mode";

export default interface Game {
    mode: Mode
    userId: number|null,
    time: number
    started: boolean
    finished: boolean,
    lives: number,
    coins: number,
    id:number
}

