import box from "@/components/Game/Sprites/box.vue";
import Coin from "@/components/Game/Sprites/Coin.vue";

const namesComponents = {'box': box, 'coin': Coin} as any
const nameToComponentConversor = (name: string) => namesComponents[name];


export default nameToComponentConversor
