
export const pathToImages = '/src/assets/images';

// hearts
export function nextHFrame(hFrame: number = 0): number {
    // const heartImg = document.querySelectorAll(".heart") as NodeListOf<HTMLElement>;
    // heartImg.forEach(h => {
    //     h.style.backgroundImage = `url('/src/assets/images/heart${hFrame}.png')`
    // })
    return (hFrame + 1) % 4;
}

//coins
function cFrames(cFrame: number = 0) {
    let coinImg = document.querySelectorAll(".coin") as NodeListOf<HTMLElement>;
    coinImg.forEach(c => {
        c.style.backgroundImage = `url('/src/assets/images/coin_${cFrame}.png')`;
    })

    dFrames(cFrame); // both executed simultaneously , so we don't call an extra timer;
    return (cFrame + 1) % 8;

}

// diamonds
function dFrames(dFrame: number = 0) {
    let diamondImg = document.querySelectorAll(".diamond") as NodeListOf<HTMLElement>;
    diamondImg.forEach(d => {
        d.style.backgroundImage = `url('src/assets/images/diamond${dFrame}.png')`;
    })
    return  (dFrame + 1) % 4
}

