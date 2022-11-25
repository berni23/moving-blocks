import {Ref} from "vue";

const arrayCountDown = ["5", "4", "3", "2", "1", "0", "GO"]; // count down array for beginning the game


const countDown = (countDownText: Ref, callback: Function) => {
    let counter = 0
    let timer = setInterval(() => {

        countDownText.value = arrayCountDown[counter]
        counter++;
        if (counter == (arrayCountDown.length+1)) {
            countDownText.value = null;
            clearInterval(timer);
            callback();
        }
    }, 800);
}

export default countDown;
