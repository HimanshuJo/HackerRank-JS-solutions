/*
https://www.hackerrank.com/challenges/mini-max-sum/problem
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
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    let ans1=0, ans2=0;
    let sz=arr.length;
    arr.sort();
    for(let i=0; i<4; ++i){
        ans1+=arr[i];
    }
    for(let i=sz-1, j=4; j>0; --i, --j){
        ans2+=arr[i];
    }
    console.log(ans1+" "+ans2);
}

function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
