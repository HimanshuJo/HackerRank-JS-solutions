/*
https://www.hackerrank.com/challenges/staircase/problem
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
 * Complete the 'staircase' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function staircase(n) {
    let arr=[];
    for(let i=0; i<n; ++i){
        arr.push([]);
        for(let j=0; j<n; ++j){
            arr[i].push(' ');
        }
    }
    for(let i=0; i<n; ++i){
        let count=i+1;
        for(let j=n-1; j>=0; --j){
            if(count==0) break;
            arr[i][j]='#';
            count--;
        }
    }
    for(let i=0; i<n; ++i){
        let temp="";
        for(let j=0; j<n; ++j)
            temp+=arr[i][j];
        console.log(temp);
    }
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    staircase(n);
}
