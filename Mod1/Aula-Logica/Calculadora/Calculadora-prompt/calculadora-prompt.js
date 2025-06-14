const prompt = require('prompt-sync')()

let valor1 = Number(prompt('Digite o primeiro valor: '))
let valor2 = Number(prompt('Digite o segundo valor: '))
let op = prompt('Informe a operação desejada (+, -, *, /): ')
let resultado = 0;

if(op === '+'){
    resultado = valor1 + valor2;
} else if(op === '-') {
    resultado = valor1 - valor2;
} else if(op === '*') {
    resultado = valor1 * valor2;
} else if(op === '/') {
    if(valor2 !== 0 || valor2 !== 0) {
        resultado = valor2 / valor2;
    } else {
        console.log("Erro: divisão por 0");
    }
} else {
    console.log('Operação invalida');
    resultado = undefined;
}

if(resultado !== undefined) {
    console.log(`Resultado: ${resultado}`);
}