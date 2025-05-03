const prompt = require('prompt-sync')()
console.log(`--- Programa Fibonacci ---`)

let num1 = Number(prompt('1º numero: '))
let num2 = Number(prompt('2º numero: '))
let proximo

console.log(num1)
console.log(num2)

for (let i = 2; i <= 10; i++) {
    proximo = num1 + num2
    console.log(proximo)
    num1 = num2
    num2 = proximo
}