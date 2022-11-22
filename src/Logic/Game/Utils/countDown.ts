import {Ref} from "vue";

const arrayCountDown = ["3", "2", "1", "0", "GO", "!"]; // count down array for beginning the game


const countDown = (countDownText: Ref, callback: Function) => {


    let counter = 0
    let timer = setInterval(() => {

        countDownText.value = arrayCountDown[counter]
        counter++;
        if (counter == arrayCountDown.length) {
            countDownText.value = null;
            clearInterval(timer);
            callback();
        }
    }, 900);
}

export default countDown;
