let x = 10;//array : estrutura que armazena um ou mais elementos na mesma variável

let pares = [2, 4, 6, 8, 10];

console.log(`Array completo : ${pares}`);
console.log(`Primeiro elemento : ${pares[0]}`);

for (let n of pares) {
    console.log(n);
}

console.log(`5 está em "pares"? ${pares.includes(5)}`);
console.log(`4 está em "pares"? ${pares.includes(4)}`);

pares.push(14);
pares.push(12);

console.log(pares);

console.log(`Ordem inversa : ${pares.reverse()}`);

pares.splice(0, 1); //função para remover começando em 0 e eliminando somente 1 elemento
console.log(pares);

console.log(`"pares" possui ${pares.length} elementos`);

let v = []; //array vazia


