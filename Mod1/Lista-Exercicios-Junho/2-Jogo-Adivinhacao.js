const prompt = require ('prompt-sync')()

function numAleatorio(num1, num2) {
    let numSecreto = Math.floor(Math.random() * 100) + 1
    let tentativas = 0
    let acertou = false

    console.log('--- Jogo da Adivinhação ---')
    console.log('Tente adivinhar o numero entre 1 e 100.')

    while (!acertou) {
        let num = Number(prompt("Digite um numero: "))
        tentativas++

        if (isNaN(num) || num < 1 || num > 100) {
            console.log(`Insira um numero entre 0 e 100`)
            continue
        }
        if (num === numSecreto) {
            console.log(`Você acertou em ${tentativas} tentativas, numero: ${num} | Valor esperado: ${numSecreto}`)
            acertou = true
        } else if (num < numSecreto) {
            console.log(`Tente um numero maior >`)
        } else {
            console.log(`Tente um numero menor <`)
        }
    }
}
numAleatorio()