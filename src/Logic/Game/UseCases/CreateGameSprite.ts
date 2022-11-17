import {gHeight} from "@/Logic/Game/constraints";
import GameSprite from "@/customTypes/gameSprite";
import box from "@/components/Sprites/box.vue";


//time in milliseconds
const createGameSprite = (component: any  ='box', time: number = 50, offsetTop: number  = gHeight/2) => {

    return {
        component: component,
        offsetTop: offsetTop,
        time: time,
        id:null
    } as GameSprite

}


export default createGameSprite;
