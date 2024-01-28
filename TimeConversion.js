/*
https://www.hackerrank.com/challenges/time-conversion/problem
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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    let bgn="", temp="";
    let ans="";
    let sz=s.length;
    bgn+=s[0], bgn+=s[1];
    temp+=s[sz-2], temp+=s[sz-1];
    let tochk=parseInt(bgn);
    if(temp==="PM"){
        if(tochk!=12){
            let toad=tochk+12;
            ans+=toad;
            for(let i=2; i<sz; ++i){
                if(s[i]==='P') break;
                ans+=s[i];
            }
            return ans;
        } else{
            for(let i=0; i<sz; ++i){
                if(s[i]==='P') break;
                ans+=s[i];
            }
            return ans;
        }
    } else{
        if(tochk!=12){
            for(let i=0; i<sz; ++i){
                if(s[i]==='A') break;
                ans+=s[i];
            }
            return ans;
        } else{
            ans+="00";
            for(let i=2; i<sz; ++i){
                if(s[i]==='A') break;
                ans+=s[i];
            }
            return ans;
        }
    }
    return "";

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
