const prompt = require('prompt-sync')()

let resposta = null;
let soma = 0;
let contador = 0;

while(resposta !== 0) {
    resposta = Number(prompt('Digite um numero para calcular a media aritmética: '));
    soma += resposta
    if (resposta !== 0){
        contador++
    }
}
let mediaFinal = soma / contador;
console.log(mediaFinal);