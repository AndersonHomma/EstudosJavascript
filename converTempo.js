var input = require('fs').readFileSync('input.txt', 'utf8');
var lines = input.split('\n');

function converteTempo(tempo) {

    let hora = Math.floor(tempo / 3600);

    tempo %= 3600;

    let min = Math.floor(tempo / 60);

    let seg = tempo % 60;

    console.log(`${hora}:${min}:${seg}`);
}

converteTempo(lines[0]);