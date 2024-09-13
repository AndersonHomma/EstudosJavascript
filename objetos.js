let dia = "terça-feira";
let notas = [4, 8, 10, 9.5];
let idade = 40;

let carro1 = {//objetos criados com atributos
    marca: "Chevrolet",
    modelo: "Celta",
    ano_fab: 2019,
    ano_modelo: 2020,
    numero_passageiros: 5,
    cor: "prata"
}

    console.log(`dia é do tipo ${typeof(dia)}`);
    console.log(`notas é do tipo ${typeof(notas)}`);
    console.log(`idade é do tipo ${typeof(idade)}`);
    console.log(`carro1 é do tipo ${typeof(carro1)}`);

    console.log(`carro1 = ${carro1}`);
    console.log(`marca de carro1 = ${carro1.marca}`);
    console.log(`cor de carro1 = ${carro1.cor}`);

    carro1.cambio = "Manual";
    console.log(`Tipo de cambio de carro1 = ${carro1.cambio}`);

    carro1.opcionais = {
        airbag_motorista: true,
        airbag_passageiro: true,
        ar_condicionado: true,
        teto_solar: false,
        multimidia: false,
        carpete: true
    }

    console.log(`Tem multimídia? ${carro1.opcionais.multimidia}`);

    let carro2 = {
        marca: "Renault",
        modelo: "Sandero",
        ano_fab: 2016,
        ano_modelo: 2016,
        opcionais: {
            multimidia: true,
            airbag_motorista: true,
            outros: {
                camera_traseira: true
            },
        },
        consumo_combustiveis: [10.2, 6.5]        
    }
    let carro2_keys = Object.keys(carro2);
    console.log(`Chaves do objeto carro2: ${carro2_keys}`);
    console.log(`modelo de carro2: ${carro2["modelo"]}`);

    for(let chave of carro2_keys) {
        console.log(`${chave}: ${carro2[chave]}`);
    }

