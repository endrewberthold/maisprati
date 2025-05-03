const prompt = require('prompt-sync')()
console.log(`--- Programa Calcular Fatorial ---`)
let num = Number(prompt('Digite um numero: '))

let fatorial = 1

for(let i = 1; i <= num; i++){
    fatorial *= i
}
console.log(`O fatorial do número: ${num} é ${fatorial}`)