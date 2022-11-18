import createEnemyWall, {maxNumEnemies} from "@/Logic/Game/Services/WaveGenerators/CreateEnemyWall";
import {getRandomInt} from "@/Logic/Game/Utils/randomNumberGenerators";


export default function createRandomWalls(timeDelay = 800, numWalls = 10) {
    let position = Math.round(maxNumEnemies / 2);
    for (let i = 0; i <= numWalls; i++) {
        console.log('position ' + i, position);
        createEnemyWall(timeDelay, position);
        position = weightedRandomHoleNum(position, maxNumEnemies);


    }
}


function calcPositionProbabilities(prevPosition: number, numEnemies: number) {

    let sumProbs: number = 0;
    let arrayProbs: Array<number> = [];
    for (let i = 1; i <= numEnemies; i++) {
        arrayProbs.push(((prevPosition - i) ** 10 + numEnemies ** 2) ** (-0.5))
        sumProbs += arrayProbs[i - 1];
    }

    return [arrayProbs, sumProbs];


}

function weightedRandomHoleNum(prevPosition: number, numEnemies: number) {
    let i;
    const probabilities = calcPositionProbabilities(prevPosition, numEnemies)
    let weights: Array<number> = probabilities[0] as Array<number>;
    const norm: number = probabilities[1] as number;
    const random = Math.random();
    let weight = 0;
    let sumCurrentWeights = 0;
    for (i = 0; i < weights.length; i++) {
        weight = weights[i] / norm;
        if (i == 0 && random <= weight) return 1;
        sumCurrentWeights += weight;
        if (random <= sumCurrentWeights) return i + 1

    }
    console.log('outside for loop, returning fully rand value');
    return getRandomInt(1, numEnemies);
}
