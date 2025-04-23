const prompt = require('prompt-sync')()

let valor1 = Number(prompt('Digite o primeiro valor: '))
let valor2 = Number(prompt('Digite o segundo valor: '))
let op = prompt('Informe a operação desejada (+, -, *, /): ')
let resultado = 0;

switch (op) {
    case '+':
        console.log(valor1 + valor2);
        break;
    case '-':
        console.log(valor1 - valor2);
        break;
    case '*':
        console.log(valor1 * valor2);
        break;
    case '/':
        if (valor1 === 0 || valor2 === 0) {
            console.log("Erro: divisão por 0");
        } else {
            resultado = valor1 / valor2;
            console.log(resultado);
        }
        break;
    default:
        console.log('Operação inválida');
        break;
}