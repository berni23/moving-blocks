import box from "@/components/Game/Sprites/box.vue";
import Coin from "@/components/Game/Sprites/Coin.vue";
import {defineComponent} from "vue";

const namesComponents = {'box': box, 'coin': Coin};
// @ts-ignore
const nameToComponentConversor = (name: string) => namesComponents[name] as any


export default nameToComponentConversor
