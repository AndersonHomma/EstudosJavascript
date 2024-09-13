var input = require('fs').readFileSync('input.txt', 'utf8');
var lines = input.split('\n');

function calculaDias (idade){

    let anos = Math.floor(idade/365);
    idade %= 365; 
    let meses = Math.floor(idade/30);
    let dias = idade%30;

    console.log(`${anos} ano(s)`);
    console.log(`${meses} mese(s)`);
    console.log(`${dias} dia(s)`);
}

calculaDias(lines[0]);