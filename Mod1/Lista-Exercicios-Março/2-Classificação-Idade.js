const prompt = require('prompt-sync')()

console.log('--- Programa Classificação por Idade ---')
let idade = Number(prompt('Digite sua idade: '))

while (idade < 0){
    idade = Number(prompt('Idade não pode ser menor que zero: '))
    idade = Number(idade)
}

let classificacao = ''

if (idade <= 10){
    classificacao = 'Criança'
} else if (idade <= 14) {
    classificacao = 'Pré-adolescente'
} else if (idade <= 18) {
    classificacao = 'Adolescente'
} else if (idade <= 21) {
    classificacao = "Jovem"
} else if (idade <= 64) {
    classificacao = 'Adulto'
} else if (idade <= 100) {
    classificacao = 'Idoso'
} else{
    classificacao = null
}

switch (classificacao) {
    case 'Criança':
        console.log(`Voce possui ${idade} anos e você é ${classificacao}`);
        break
    case 'Pré-adolescente':
        console.log(`Voce possui ${idade} anos e você é ${classificacao}`);
        break
    case 'Adolescente':
        console.log(`Voce possui ${idade} anos e você é ${classificacao}`);
        break
    case 'Jovem':
        console.log(`Voce possui ${idade} anos e você é ${classificacao}`);
        break
    case 'Adulto':
        console.log(`Voce possui ${idade} anos e você é ${classificacao}`);
        break
    case 'Idoso':
        console.log(`Voce possui ${idade} anos e você é ${classificacao}`);
        break
    default:
        console.log(`Valor invalido inserido`);
        break
}