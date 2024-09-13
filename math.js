console.log(`Raiz quadrada de 16 = ${Math.sqrt(16)}`);
console.log(`3.1415 truncado : ${Math.trunc(3.1415)}`);
console.log(`3.1415 arredondado : ${Math.round(3.1415)}`);
console.log(`3.678 truncado : ${Math.trunc(3.678)}`);//arredonda para baixo
console.log(`3.678 arredondado : ${Math.round(3.678)}`);//arredonda para o mais próximo
console.log(`Piso de 9.56 : ${Math.floor(9.56)}`);//piso
console.log(`teto de 9.56 : ${Math.ceil(9.56)}`);//teto
console.log(`Valor absoluto de -4.123 : ${Math.abs(-4.123)}`);
console.log(`Maior valor entre : 1, 5, 9, 3, 4 = ${Math.max(1, 5, 9, 3, 4)}`);
console.log(`Menor valor entre : 1, 5, 9, 3, 4 = ${Math.min(1, 5, 9, 3, 4)}`);



let numeros = [3, 4, 1, 30, 39, 10];
console.log(...numeros);//os 3 pontos converte em argumentos da função
console.log(`Maior valor de "numeros": ${Math.max(...numeros)}`)