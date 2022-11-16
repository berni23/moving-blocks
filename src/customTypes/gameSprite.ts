import Mode from "@/customTypes/mode";
import {DefineComponent} from "vue";

export default interface GameSprite {
    component: string,
    offsetTop: number,
    time: number,
    id:number|null

}

