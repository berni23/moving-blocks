import createDelay, {createDelays} from "@/Logic/Game/Services/WaveGenerators/Others/CreateDelay";
import createObjectRow, {
    createAlienRowAndCoinsInTheMiddle,
    createAlternateObjectRow,
    createTwoObjectRows,
    createTwoObjectRowsAndAThirdInTheMiddle
} from "@/Logic/Game/Services/WaveGenerators/Others/CreateObjectRow";
import {gHeight} from "@/Logic/Game/constraints";
import createObjectsInRandPosition from "@/Logic/Game/Services/WaveGenerators/Others/CreateObjectInRandPosition";
import createRandomWalls from "@/Logic/Game/Services/WaveGenerators/ObjectWalls/CreateRandomWalls";
import {createPowerUp} from "@/Logic/Game/Services/WaveGenerators/CreateSimpleObjects";
import createSnakeWall from "@/Logic/Game/Services/WaveGenerators/ObjectWalls/CreateSnakeWall";
import GameSprite from "@/customTypes/gameSprite";
import createGameSprite from "@/Logic/Game/UseCases/CreateGameSprite";
import {createThickWallNoHole, spaceTunnel} from "@/Logic/Game/Services/WaveGenerators/ObjectWalls/CreateThickWall";
import createEnemyWall from "@/Logic/Game/Services/WaveGenerators/ObjectWalls/CreateEnemyWall";


const createSeaCoins = () => createThickWallNoHole(100, 15, 'coin');


export function easyWave() {


    return createObjectsInRandPosition(200, 210, 'box')
        .concat(createEnemyWall())
        .concat(createObjectRow())
        .concat(createObjectRow('coin', 15, gHeight / 3.5))
        .concat(createAlternateObjectRow(['coin', 'box'], 400))
        .concat(createObjectRow())
        .concat(createTwoObjectRows('coin', 12, [gHeight / 6, gHeight / 1.5]))
        .concat(createTwoObjectRowsAndAThirdInTheMiddle())
        .concat(createSeaCoins())
        .concat(createObjectsInRandPosition(200, 300, 'box'))
        .concat(mediumWave());

}

export function mediumWave(): Array<GameSprite> {

    // return createDelay(200);
    return createDelay(2000).concat(
        createTwoObjectRows('box', 10, [1 / 5 * gHeight, 4 / 5 * gHeight])).concat
    (createDelay(200))
        .concat(
            customWave());


}


export function hardWave() {


    let array = createDelay(200)
        .concat(createAlienRowAndCoinsInTheMiddle())
        .concat(createSnakeWall())
        .concat(createRandomWalls())
        .concat(createDelay(200))
        .concat(createThickWallNoHole(100, 12, 'coin'))
        .concat(spaceTunnel())
        .concat(createSnakeWall(80, 10, 'coin', 'box'))
        .concat(createEnemyWall()).concat(
            createObjectsInRandPosition(200, 210, 'box').concat(
                // let shuffled = duplicateSpritesAndShuffle(array2.concat(createDelays(12, 200)).concat(createAlienRowAndCoinsInTheMiddle()));
                createRandomWalls()).concat(
                createRandomWalls()).concat(
                createRandomWalls()).concat(
                createObjectsInRandPosition(40, 300, 'box')));

    return array;

    // return array.concat(array2).concat(shuffled);
    // return createThickWallNoHole(100, 10, 'coin').concat(shuffled).concat(array);
}

export function customWave() {

    return createTwoObjectRowsAndAThirdInTheMiddle('box', 'coin', 20, [gHeight / 5, gHeight / 2, 4 * gHeight / 5]).concat(
        createTwoObjectRows('box', 10, [1 / 5 * gHeight, 4 / 5 * gHeight])).concat(
        createObjectRow('coin', 10, gHeight / 2)).concat(
        createObjectRow('box', 5, gHeight / 2)).concat(
        createObjectRow('coin', 5, gHeight / 2)).concat(
        createAlternateObjectRow(['coin', 'box'], 400)).concat(
        createTwoObjectRows('coin', 12, [gHeight / 6, gHeight / 1.5])).concat(
        createObjectRow('box', 5, gHeight / 2)).concat(
        createObjectRow('coin', 15, gHeight / 2)).concat(
        createTwoObjectRowsAndAThirdInTheMiddle()).concat(
        [createGameSprite('box', 400), createGameSprite('coin', 2000, gHeight / 3)]).concat(
        createSnakeWall()).concat(
        createDelay(200)).concat(
        createObjectsInRandPosition(40, 50)).concat(
        createRandomWalls()).concat(
        createDelay(200)).concat(
        createSnakeWall(80, 10, 'coin', 'box')).concat(
        createObjectsInRandPosition(50, 120)).concat(
        createObjectRow('coin', 10, gHeight / 2, 200)).concat(
        spaceTunnel()).concat(
        createDelay(200)).concat(
        createObjectsInRandPosition(20, 60)).concat(
        createDelay(200)).concat(
        // duplicateSpritesAndShuffle();
        createRandomWalls()).concat(
        createRandomWalls()).concat(
        createRandomWalls()).concat(
        createPowerUp())
}

export default function waveOfMode(mode: string): Array<GameSprite> {



    let wave = null as Array<GameSprite> | null;
    switch (mode) {
        case 'easy':
            wave = easyWave();
            break;
        case 'hard':
            wave = hardWave();
            break;
        default:
            wave = mediumWave()

    }
    return addIdsToSprites(wave);
}


function addIdsToSprites(arraySprites: Array<GameSprite>) {

    arraySprites.forEach((sprite, i) => {
        sprite.id = i + 1;
    })

    return arraySprites
}
