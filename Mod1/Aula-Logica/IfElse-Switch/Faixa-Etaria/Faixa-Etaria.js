//caso com if else
const prompt = require('prompt-sync')()

let nome = prompt('Digite o nome: ')
let idade = Number(prompt('Digite o idade: '))

let faixaEtaria = ''

if(typeof nome === 'string' && idade >= 0 && idade < 111) {
    if(idade >= 0 && idade <= 12) {
        faixaEtaria= "Infantil";
    } else if (idade >= 13 && idade <= 17) {
        faixaEtaria = "Adolescente";
    } else if (idade >= 18 && idade <= 21) {
        faixaEtaria = "Jovem";
    } else if (idade >= 22 && idade <= 64) {
        faixaEtaria = "Adulto";
    } else if (idade >= 65 && idade <= 110) {
        faixaEtaria = "Idoso";
    }
} else {
    console.log("Valores invalidos");
}
switch (faixaEtaria) {
    case "Infantil":
        console.log(`${nome} tem ${idade} anos e está na faixa: infantil.`);
        break
    case "Adolescente":
        console.log(`${nome} tem ${idade} anos e está na faixa: adolescente.`);
        break
    case "Jovem":
        console.log(`${nome} tem ${idade} anos e está na faixa: jovem.`);
        break
    case "Adulto":
        console.log(`${nome} tem ${idade} anos e está na faixa: adulto.`);
        break
    case "Idoso":
        console.log(`${nome} tem ${idade} anos e está na faixa: idoso.`);
        break
    default:
        console.log("Valores invalidos");
        break
}