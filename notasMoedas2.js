//EXEMPLO DO PROFESSOR

let input = require('fs').readFileSync('input.txt', 'utf8');
let lines = input.split('\n');

let valor = Number(lines[0]);

function quantidadeCedulas(total, cedula){
    //verifica se é valor de nota

        if (total < cedula){
            return {"numero_cedulas": 0, "resto": total};
        }
        
        if(total >= 1){
        let numero_cedulas = Math.trunc(total / cedula);
        let resto = (total % cedula);
        return {"numero_cedulas": numero_cedulas, "resto":resto};
        
        //caso seja moeda
        }else{

        total = Math.trunc(total * 100);

        if(cedula < 1){
            cedula = Math.trunc(cedula * 100);
        }
        let numero_cedulas = Math.trunc(total/cedula);
        let resto = (total % cedula)/100;
        return {"numero_cedulas": numero_cedulas, "resto": resto};

    }
}

//let resultado
//resultado = quantidadeCedula

let reais = Math.trunc(valor);
let centavos = valor - reais;

let notas = [100, 50, 20, 10, 5, 2];
let moedas = [0.5, 0.25, 0.1, 0.01];

console.log("NOTAS");
for (let nota of notas){
    let resultado = quantidadeCedulas(reais, nota);
    console.log(`${resultado.numero_cedulas} nota(s) de R$ ${nota}.00`);
    reais = resultado.resto;
}

console.log("MOEDAS");
console.log(`${reais} moeda (s) de R$ 1.00`);
for (let moeda of moedas){
    let resultado = quantidadeCedulas(centavos, moeda);
    console.log(`${resultado.numero_cedulas} moeda(s) de R$ ${moeda.toFixed(2)}`);
    centavos = resultado.resto;
}
