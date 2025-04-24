//caso com if else
const prompt = require('prompt-sync')()

let nome = prompt('Digite o nome: ')
let idade = Number(prompt('Digite o idade: '))

if(typeof nome === 'string' && idade >= 0 && idade < 111) {
    if(idade >= 0 && idade <= 12) {
        console.log(`${nome} tem ${idade} anos e está na faixa: infantil.`);
    } else if (idade >= 13 && idade <= 17) {
        console.log(`${nome} tem ${idade} anos e está na faixa: adolescente.`);
    } else if (idade >= 18 && idade <= 21) {
        console.log(`${nome} tem ${idade} anos e está na faixa: jovem.`);
    } else if (idade >= 22 && idade <= 64) {
        console.log(`${nome} tem ${idade} anos e está na faixa: adulto.`);
    } else if (idade >= 65 && idade <= 110) {
        console.log(`${nome} tem ${idade} anos e está na faixa: idoso.`);
    }
} else {
    console.log("Valores inválidos");
}
//caso com switch case
/*
switch (idade) {
    case idade:
        if(idade >= 0 && idade <= 12) {
            console.log(`${nome} tem ${idade} anos e está na faixa: infantil.`);
        }
        break
    case idade:
        if(idade >= 13 && idade <= 17) {
            console.log(`${nome} tem ${idade} anos e está na faixa: adolescente.`);
        }
        break
    case idade:
        if(idade >= 18 && idade <= 21) {
            console.log(`${nome} tem ${idade} anos e está na faixa: jovem.`);
        }
        break
    case idade:
        if(idade >= 22 && idade <= 64) {
            console.log(`${nome} tem ${idade} anos e está na faixa: adulto.`);
        }
        break
    case idade:
        if(idade >= 65 && idade <= 110) {
            console.log(`${nome} tem ${idade} anos e está na faixa: idoso.`);
        }
        break
    default:
        console.log("Valores invalidos");
        break
}

 */