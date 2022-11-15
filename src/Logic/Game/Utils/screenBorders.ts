import {pixToInt} from "@/Logic/Game/Utils/pixelConv";
import {limitBottom, limitRight, marginGame} from "@/Logic/Game/constraints";

function borderTop(element: HTMLElement) {
    return pixToInt(element.style.marginTop) > marginGame;
}

function borderBottom(element:HTMLElement) {
    return pixToInt(element.style.marginTop) < limitBottom;
}

function borderLeft(element:HTMLElement) {
    return pixToInt(element.style.marginLeft) > marginGame;
}

function borderRight(element:HTMLElement) {
    return pixToInt(element.style.marginLeft) < limitRight;
}
