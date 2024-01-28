/*
https://www.hackerrank.com/challenges/plus-minus/problem
*/

'use strict';

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
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    let countpos=0, countnegs=0, countzeros=0, sz=arr.length;
    let ans=[];
    for(let i=0; i<sz; ++i){
        if(arr[i]>0) countpos++;
        if(arr[i]<0) countnegs++;
        else if(arr[i]===0) countzeros++;
    }
    console.log((parseFloat(countpos/sz).toFixed(6))+"\n"+
                (parseFloat(countnegs/sz).toFixed(6))+"\n"+
                (parseFloat(countzeros/sz).toFixed(6))); 
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
