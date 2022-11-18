import ElementSprite from "@/customTypes/elementSprite";


export const isCollision = (element1: ElementSprite, element2: ElementSprite) => {

    // let p1 = position(element1);
    // let p2 = position(element2);


    let y1 = element1.offsetTop;
    let y2 = element2.offsetTop;
    let x1 = element1.offsetLeft;
    let x2 = element2.offsetLeft;

    let h1Half = element1.height2;
    let h2Half = element2.height2;

    let w1Half = element1.width2;
    let w2Half = element2.width2;


    let collideX = (x1 == x2) || ((x1 < x2) ? x1 < (x2 - w2Half) : x2 < (x1 - w1Half))


    let collideY =  (y1 == y2)|| ((y1 < y2) ? y1 < (y2 - h2Half) : y2 < (y1 - h1Half))


    // return (Math.abs(p1[0] - p2[0]) < (p1[2] + p2[2]) && Math.abs(p1[1] - p2[1]) < (p1[2] + p2[2]))

    return !collideX && !collideY;

    // return (Math.abs(p1[0] - p2[0]) < (p1[2] + p2[2]) && Math.abs(p1[1] - p2[1]) < (p1[2] + p2[2]))
}


export const position = (element: ElementSprite) => [element.offsetTop + element.height2, element.offsetLeft, element.width2]

