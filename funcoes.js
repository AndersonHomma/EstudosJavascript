//declaração da função funcao_quadratica
//parametro de entrada : x
function funcao_quadratica(x){
    return (x**2) - (8 * x) + 6;
}

function diga_oi(){
    console.log("Oi!");
}

function area_circulo(raio) {
    let area = Math.pi * (raio**2);
    return area;
}

//chamando a função funcao_quadratica para x = 20
let res = funcao_quadratica(20);
//chamando a função funcao_quadratica para x = -20
res = funcao_quadratica(-20);

diga_oi();

for(let i = -10; i <=10; i++){
    res = funcao_quadratica(i);
    console.log(`f(${i}) = ${res}`);
}

