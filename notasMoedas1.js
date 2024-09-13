var input = require('fs').readFileSync('input.txt', 'utf8');
var lines = input.split('\n');

function decompoeMoeda(valor) {
    
    valor = Math.round(valor * 100);

    
    const notas = [10000, 5000, 2000, 1000, 500, 200];
    const moedas = [100, 50, 25, 10, 5, 1];

    console.log("NOTAS:");
    
    for (let nota of notas) {
        let qtdNotas = Math.floor(valor / nota);
        console.log(`${qtdNotas} nota(s) de R$ ${(nota / 100).toFixed(2)}`);
        valor %= nota;
    }

    console.log("MOEDAS:");

    for (let moeda of moedas) {
        let qtdMoedas = Math.floor(valor / moeda);
        console.log(`${qtdMoedas} moeda(s) de R$ ${(moeda / 100).toFixed(2)}`);
        valor %= moeda;
    }
}

decompoeMoeda(lines[0]);