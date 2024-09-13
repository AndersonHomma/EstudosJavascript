let input = require('fs').readFileSync('input.txt','utf-8');
let lines = input.split('\n');

let a = lines[0];//horas
let b = lines[1];//km/h

function gastoComb(h, km_h) {
    let km = km_h*h;
    return km/12;
}

console.log(gastoComb(a,b).toFixed(3));