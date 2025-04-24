const prompt = require('prompt-sync')()

let nome = prompt('Digite o nome: ')
let idade = Number(prompt('Digite o idade: '))

if(typeof nome === 'string' && idade > 0 && idade < 111) {
    if(idade >= 0 && idade <= 12) {
        let faixa = 1;
    } else if (idade >= 13 && idade <= 17) {
        let faixa = 2;
    } else if (idade >= 18 && idade <= 21) {
        let faixa = 3;
    } else if (idade >= 22 && idade <= 64) {
        let faixa = 4;
    } else if (idade >= 65 && idade <= 110) {
        let faixa = 5;
    }
} else {
    console.log("Valores inválidos");
}
switch (faixa) {
    case (faixa >= 12):
        console.log(`${nome} tem ${idade} anos e está na faixa: infantil.`);
        break
    case 2:
        console.log(`${nome} tem ${idade} anos e está na faixa: adolescente.`);
        break
    case 3:
        console.log(`${nome} tem ${idade} anos e está na faixa: jovem.`);
        break
    case 4:
        console.log(`${nome} tem ${idade} anos e está na faixa: adulto.`);
        break
    case 5:
        console.log(`${nome} tem ${idade} anos e está na faixa: idoso.`);
        break
    default:
        console.log("Valores invalidos");
        break
}