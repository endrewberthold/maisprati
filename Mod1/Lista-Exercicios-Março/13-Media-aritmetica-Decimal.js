const prompt = require('prompt-sync')()
console.log('--- Programa Média Aritmética Decimal ---')

let soma = 0
let contador = 0

while (true) {
    let resposta = Number(prompt('Digite um número decimal (0.0) ou 0 para sair: '))

    if (resposta === 0) break

    if (resposta % 1 === 0) {
        console.log('Números inteiros não são permitidos.')
        continue
    }

    soma += resposta
    contador++
}

if (contador > 0) {
    let media = soma / contador
    console.log(`A média aritmética dos valores somados é: ${media.toFixed(2)}`)
} else {
    console.log('Nenhum número decimal válido foi inserido.')
}