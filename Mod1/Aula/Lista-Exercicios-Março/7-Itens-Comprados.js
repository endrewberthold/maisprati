const prompt = require('prompt-sync')()

let quantidade = Number(prompt('Digite a quantidade de Maçãs: '))
let valorDuzia = 0.30
let valorAcima = 0.25
let resultado = ''

if (quantidade < 12){
    resultado = quantidade * valorDuzia
    console.log(`Total a pagar: R$ ${resultado.toFixed(2)}`)
} else {
    resultado = quantidade * valorAcima
    console.log(`Total a pagar: R$ ${resultado.toFixed(2)}`)
}