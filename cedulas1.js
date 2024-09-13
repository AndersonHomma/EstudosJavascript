var input = require('fs').readFileSync('input.txt', 'utf8');
var line = input.split('\n');


function calculaNotas(vlr) {
    
    const notas = [100, 50, 20, 10, 5, 2, 1];
        
    console.log(vlr);
    
        for (let i = 0; i < notas.length; i++) {
        let qtdNotas = Math.floor(vlr / notas[i]);
        console.log(`${qtdNotas} nota(s) de R$ ${notas[i]},00`);
        vlr %= notas[i];
    }
}

calculaNotas(line[0]);