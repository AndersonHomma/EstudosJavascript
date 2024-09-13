let input = require('fs').readFileSync('input.txt','utf-8');
let lines = input.split('\n');
let somaPos = 0;

for (let num of lines) {
    if (num > 0) {
        somaPos += 1;
    }
}

console.log(`${somaPos} valores positivos`);

