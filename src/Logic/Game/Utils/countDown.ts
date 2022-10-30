import {ref} from "vue";

const arrayCountDown = ["3", "2", "1", "0", "GO!", "!"]; // count down array for beginning the game


const countDown = (element: HTMLElement,callback:Function) => {
    const timer = ref(0);
    const counter = ref(0);
    timer.value = setInterval(() => {
        element.textContent = arrayCountDown[counter.value];
        counter.value++;
        if (counter.value == arrayCountDown.length) {
            element.textContent = "";
            clearInterval(timer.value);
            callback();
        }
    },900);
    return timer;
}

export default countDown;
