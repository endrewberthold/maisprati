const prompt = require('prompt-sync')()

console.log('--- Programa Média Aritmética Decimal ---')
let resposta = null
let soma = 0
let contador = 0

while(resposta !== 0){
    resposta = Number(prompt('Digite um numero decimal (0.0) ou inteiro para calcular: '))
    soma += resposta
    contador++
}
let mediaArt = soma / contador
console.log(`A média aritmética dos valores somados é: ${mediaArt.toFixed(2)}`)