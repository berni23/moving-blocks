import box from "@/components/Sprites/box.vue";
import Coin from "@/components/Sprites/Coin.vue";
import Diamond from "@/components/Sprites/Diamond.vue";
import PowerUp from "@/components/Sprites/PowerUp.vue";

const namesComponents = {'box': box, 'coin': Coin, 'diamond': Diamond, 'power-up': PowerUp};
// @ts-ignore
const nameToComponentConversor = (name: string) => namesComponents[name] as any


export default nameToComponentConversor
