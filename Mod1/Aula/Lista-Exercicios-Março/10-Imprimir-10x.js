const prompt = require('prompt-sync')()
console.log(`--- Programa Imprimir 10 vezes ---`)
let num = Number(prompt('Digite um numero: '))

for (contador = 0; contador < 10; contador++) {
    console.log(num)
}