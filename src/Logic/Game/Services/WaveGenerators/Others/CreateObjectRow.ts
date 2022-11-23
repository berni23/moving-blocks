import {boxSize, gHeight, initialCoordinates, marginGame, vOthers} from "@/Logic/Game/constraints";
import saveSprite from "@/Logic/Game/Services/Save/SaveSprite";
import CreateGameSprite from "@/Logic/Game/UseCases/CreateGameSprite";
import createDelay from "@/Logic/Game/Services/WaveGenerators/Others/CreateDelay";


export default function createObjectRow(type = 'box', numObjects = 10, offsetTop = initialCoordinates[1], timeDelay = null as number | null) {

    if (!timeDelay) timeDelay = vOthers * (boxSize) + marginGame;
    for (let i = 0; i < numObjects; i++) saveSprite(CreateGameSprite(type, timeDelay, offsetTop))

}


export function createAlternateObjectRow(types: Array<String> = ['box', 'coin'], timeDelay = null as number | null, numObjects = 10, offsetTop = initialCoordinates[1]) {

    if (!timeDelay) timeDelay = vOthers * (boxSize) + marginGame;
    for (let i = 0; i < numObjects; i++) {
        if (i % 2) saveSprite(CreateGameSprite(types[0], timeDelay, offsetTop))
        else saveSprite(CreateGameSprite(types[1], timeDelay, offsetTop))

    }


}


export function createTwoObjectRows(type = 'box', numObjects = 15, offsets: Array<number> | null = null, timeDelay = null as number | null) {


    if (!timeDelay) timeDelay = vOthers * (boxSize) + marginGame;

    if (!offsets) offsets = [Math.round(gHeight / 3), Math.round(gHeight * (0.5 + 1 / 3))]
    for (let i = 0; i < numObjects; i++) {

        saveSprite(CreateGameSprite(type, 0, offsets[0]))
        saveSprite(CreateGameSprite(type, timeDelay, offsets[1]))

    }
}

export function createTwoObjectRowsAndAThirdInTheMiddle(type = 'box', middleType = 'coin', numObjects = 20, offsets: Array<number> | null = null, timeDelay = null as number | null) {
    if (!timeDelay) timeDelay = vOthers * (boxSize) + marginGame;
    if (!offsets) {
        let offset1 = Math.round(2*gHeight / 5);
        let offset2 = gHeight / 2;
        let offset3 = 3*gHeight / 5;
        offsets = [offset1, offset2, offset3];
    }
    createDelay(200);
    for (let i = 0; i < numObjects; i++) {
        saveSprite(CreateGameSprite(type, 20, offsets[0]))
        saveSprite(CreateGameSprite(middleType, timeDelay, offsets[1]))
        saveSprite(CreateGameSprite(type, 20, offsets[2]))
    }
    createDelay(200)

}
