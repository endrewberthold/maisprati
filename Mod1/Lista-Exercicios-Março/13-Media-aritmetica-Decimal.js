const prompt = require('prompt-sync')()
console.log('--- Programa Média Aritmética Decimal ---')
let resposta = Number(prompt('Digite um numero decimal (0.0) para calcular: '))
let soma = 0
let contador = 0

if (resposta % 1 == 0){
    console.log('Números inteiros não são permitidos')
    return
} else {
    while(resposta !== 0){
        resposta = Number(prompt('Digite um numero decimal (0.0) para calcular: '))
        soma += resposta
        contador++
    }
}

let mediaArt = soma / contador
console.log(`A média aritmética dos valores somados é: ${mediaArt.toFixed(2)}`)