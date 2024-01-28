/*
https://www.hackerrank.com/challenges/birthday-cake-candles/problem
*/

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'birthdayCakeCandles' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY candles as parameter.
 */

function birthdayCakeCandles(candles) {
    let maxx=Number.MIN_VALUE;
    let sz=candles.length;
    let mp=new Map();
    for(let i=0; i<sz; ++i){
        maxx=Math.max(maxx, candles[i]);
        if(mp.has(candles[i])){
            mp.set(candles[i], mp.get(candles[i])+1);   
        } else{
            mp.set(candles[i], 1);
        }
    }
    return mp.get(maxx);
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const candlesCount = parseInt(readLine().trim(), 10);

    const candles = readLine().replace(/\s+$/g, '').split(' ').map(candlesTemp => parseInt(candlesTemp, 10));

    const result = birthdayCakeCandles(candles);

    ws.write(result + '\n');

    ws.end();
}
