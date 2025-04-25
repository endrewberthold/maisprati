const prompt = require('prompt-sync')()

let resposta = null;
let soma = 0;
let contador = 0;
//Calcular a média aritmética de numeros inseridos até que o usuário digite 0
do {
    resposta = Number(prompt('Digite um numero para calcular a media aritmética: '));
    soma += resposta
    if (resposta !== 0){
        contador++
    }
} while (resposta !== 0);

let mediaFinal = soma / contador;
console.log(mediaFinal.toFixed(2));