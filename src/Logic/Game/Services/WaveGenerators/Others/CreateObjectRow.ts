import {boxSize, gHeight, initialCoordinates, marginGame, vOthers} from "@/Logic/Game/constraints";
import CreateGameSprite from "@/Logic/Game/UseCases/CreateGameSprite";
import createDelay from "@/Logic/Game/Services/WaveGenerators/Others/CreateDelay";
import GameSprite from "@/customTypes/gameSprite";


export default function createObjectRow(type = 'box', numObjects = 10, offsetTop = initialCoordinates[1], timeDelay = null as number | null) {

    let arraySprites = [] as Array<GameSprite>;

    if (!timeDelay) timeDelay = vOthers * (boxSize) + marginGame;
    for (let i = 0; i < numObjects; i++) arraySprites.push(CreateGameSprite(type, timeDelay, offsetTop))

    return arraySprites;

}


export function createAlternateObjectRow(types: Array<String> = ['box', 'coin'], timeDelay = null as number | null, numObjects = 10, offsetTop = initialCoordinates[1]) {
    let arraySprites = [] as Array<GameSprite>;

    if (!timeDelay) timeDelay = vOthers * (boxSize) + marginGame;
    for (let i = 0; i < numObjects; i++) {
        if (i % 2) arraySprites.push(CreateGameSprite(types[0], timeDelay, offsetTop))
        else arraySprites.push(CreateGameSprite(types[1], timeDelay, offsetTop))

    }

    return arraySprites;

}


export function createTwoObjectRows(type = 'box', numObjects = 15, offsets: Array<number> | null = null, timeDelay = null as number | null): Array<GameSprite> {


    let arraySprites = [] as Array<GameSprite>;
    if (!timeDelay) timeDelay = vOthers * (boxSize) + marginGame;
    if (!offsets) offsets = [Math.round(gHeight / 3), Math.round(gHeight * (0.5 + 1 / 3))]
    for (let i = 0; i < numObjects; i++) {
        arraySprites.push(CreateGameSprite(type, 0, offsets[0]));
        arraySprites.push(CreateGameSprite(type, timeDelay, offsets[1]))

    }

    return arraySprites
}

export function createTwoObjectRowsAndAThirdInTheMiddle(type = 'box', middleType = 'coin', numObjects = 20, offsets: Array<number> | null = null, timeDelay = null as number | null) {
    let arraySprites = [] as Array<GameSprite>;

    if (!timeDelay) timeDelay = vOthers * (boxSize) + marginGame;
    if (!offsets) {
        let offset1 = Math.round(2 * gHeight / 5);
        let offset2 = gHeight / 2;
        let offset3 = 3 * gHeight / 5;
        offsets = [offset1, offset2, offset3];
    }
    arraySprites.concat(createDelay(200));
    for (let i = 0; i < numObjects; i++) {
        arraySprites.push(CreateGameSprite(type, 20, offsets[0]))
        arraySprites.push(CreateGameSprite(middleType, timeDelay, offsets[1]))
        arraySprites.push(CreateGameSprite(type, 20, offsets[2]))
    }
    arraySprites.concat(createDelay(200));
    return arraySprites;

}


export function createAlienRowAndCoinsInTheMiddle() {
    return createTwoObjectRowsAndAThirdInTheMiddle('box', 'coin', 20, [gHeight / 5, gHeight / 2, 4 * gHeight / 5]);

}
