import ElementSprite from "@/customTypes/elementSprite";


export const isCollision = (element1: ElementSprite, element2: ElementSprite) => {

    // let p1 = position(element1);
    // let p2 = position(element2);


    let y1 = element1.offsetTop;
    let y2 = element2.offsetTop;
    let x1 = element1.offsetLeft;
    let x2 = element2.offsetLeft;

    let h1Half = element1.height;
    let h2Half = element2.height;

    let w1Half = element1.width;
    let w2Half = element2.width;

    let collideX = ((x1 < x2) ? x1 > (x2 - w1Half) : x2 >= (x1 - w2Half))
    let collideY = ((y1 < y2) ? y1 > (y2 - h1Half) : y2 > (y1 - h2Half));
    // return (Math.abs(p1[0] - p2[0]) < (p1[2] + p2[2]) && Math.abs(p1[1] - p2[1]) < (p1[2] + p2[2]))

    return collideX && collideY;

    // return (Math.abs( - p2[0]) < (p1[2] + p2[2]) && Math.abs(p1[1] - p2[1]) < (p1[2] + p2[2]))
}

