import ElementSprite from "@/customTypes/elementSprite";


export const isCollision = (element1: ElementSprite, element2: ElementSprite) => {

    let p1 = position(element1);
    let p2 = position(element2);
    return (Math.abs(p1[0] - p2[0]) < (p1[2] + p2[2]) && Math.abs(p1[1] - p2[1]) < (p1[2] + p2[2]))
}

export const position = (element: ElementSprite) => [element.offsetTop + element.height2, element.offsetLeft, element.width2]


