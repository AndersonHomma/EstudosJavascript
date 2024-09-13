let input = require('fs').readFileSync('input.txt','utf-8');
let lines = input.split('\n');
let num = Number(lines[0]);


for (let i = 1; i <= num; i++) {
    if(num % i == 0){
        console.log(i);
    }
    
}
