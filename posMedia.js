let input = require('fs').readFileSync('input.txt','utf-8');
let lines = input.split('\n');
let qtdPos = 0;
let somaPos = 0;

for (let num of lines) {
    num = Number(num);
    if (num > 0) {
        somaPos += num;
        qtdPos += 1;
    }
}

let media = somaPos/qtdPos;

console.log(`${qtdPos} valores positivos`);
console.log(media.toFixed(1));
