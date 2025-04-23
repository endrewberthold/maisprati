const prompt = require('prompt-sync')()

let num = Number(prompt('Digite um numero com ou sem sinal: '))

if(num < 0) {
    console.log(`O valor inserido é negativo: ${num}`)
} else if (num === 0) {
    console.log(`O valor inserido é igual a: ${num}`)
} else {
    console.log(`O valor inserido é positivo: ${num}`)
}