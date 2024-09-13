let input = require('fs').readFileSync('parImpar.txt','utf-8');
let lines = input.split('\n');

let somaPar = 0;
let somaImpar = 0;


for (let n of lines){

    if(n % 2 == 0){
        console.log(`${n} é par.`);
        somaPar += Number(n);
    }else{
        console.log(`${n} é impar.`);
        somaImpar += Number(n);
    } 
      
}

console.log(`A Soma dos pares é ${somaPar}`);
console.log(`A Soma dos impares é ${somaImpar}`);
console.log(`A Soma total é ${somaImpar + somaPar}`);


