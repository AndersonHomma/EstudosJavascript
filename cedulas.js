var input = require('fs').readFileSync('input.txt', 'utf8');

let a = input;

function calculaNotas(valor){
    let n100 = Math.trunc(valor/100);
    let vlratual = valor-(n100*100);
    let n50 = Math.trunc(vlratual/50);
    vlratual -= (n50*50);
    let n20 = Math.trunc(vlratual/20);
    vlratual -= (n20*20);
    let n10 = Math.trunc(vlratual/10);
    vlratual -= (n10*10);
    let n5 = Math.trunc(vlratual/5);
    vlratual -= (n5*5);
    let n2 = Math.trunc(vlratual/2);
    vlratual -= (n2*2);
    let n1 = Math.trunc(vlratual/1);
    
    let notas = [n100, n50, n20, n10, n5, n2, n1];
    return notas;}

    let notas = calculaNotas(a);

    console.log(a);
    console.log(`${notas[0]} nota(s) de R$ 100,00`);
    console.log(`${notas[1]} nota(s) de R$ 50,00`);
    console.log(`${notas[2]} nota(s) de R$ 20,00`);
    console.log(`${notas[3]} nota(s) de R$ 10,00`);
    console.log(`${notas[4]} nota(s) de R$ 5,00`);
    console.log(`${notas[5]} nota(s) de R$ 2,00`);
    console.log(`${notas[6]} nota(s) de R$ 1,00`);
    
    