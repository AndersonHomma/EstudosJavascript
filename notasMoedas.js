var input = require('fs').readFileSync('input.txt', 'utf8');
var lines = input.split('\n');

function decompoeMoeda(valor){

    const moeda = [100, 50, 20, 10, 5, 2, 1, 0.5, 0.25, 0.1, 0.05, 0.01];

    console.log("NOTAS:");
    for (let i = 0; i <= 5; i++) {
        
        let qtdMoeda = Math.floor(valor/moeda[i]);
        
        console.log(`${qtdMoeda} nota(s) de R$ ${moeda[i]}.00`);

        valor %= moeda[i];        
    }
    
    console.log("MOEDAS:");
    for (let i = 6; i < moeda.length; i++){

        let qtdMoeda = Math.floor(valor/moeda[i]);
        
        if(valor > 0){
            console.log(`${qtdMoeda} moeda(s) de R$ ${moeda[i].toFixed(2)}`);
        }else{
            console.log(`${qtdMoeda} moeda(s) de R$ ${moeda[i].toFixed(2)}`);
        }

        valor %= moeda[i]; 

       
    }

}
decompoeMoeda(lines[0]);