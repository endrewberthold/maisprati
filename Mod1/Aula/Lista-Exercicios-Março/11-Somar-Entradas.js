const prompt = require('prompt-sync')()

console.log('--- Programa Somar Entradas ---');

let resposta = null
let soma = 0
let contador = 0

while(contador < 5){
    resposta = Number(prompt('Digite um numero: '))
    soma += resposta
    contador++
}
console.log(`Soma dos valores inseridos: ${soma}`)