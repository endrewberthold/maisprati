const prompt = require('prompt-sync')()
console.log('--- Programa IMC ---')
let peso = Number(prompt('Digite seu peso (kg): '))
let altura = Number(prompt('Digite sua altura (cm): '))

if (peso == '' || isNaN(peso) || (altura == '' && isNaN(altura))) {
    console.log('Digite os dados corretamente')
    return
}

let imc = peso / Math.pow(altura / 100, 2)

if (imc < 18.5) {
    console.log(`Magreza - IMC: ${imc.toFixed(2)}`)
} else if (imc < 25) {
    console.log(`Normal - IMC: ${imc.toFixed(2)}`)
} else if (imc < 30) {
    console.log(`Sobrepeso - IMC: ${imc.toFixed(2)}`)
} else if (imc < 35) {
    console.log(`Obesidade Grau I - IMC: ${imc.toFixed(2)}`)
} else if (imc < 40) {
    console.log(`Obesidade Grau II - IMC: ${imc.toFixed(2)}`)
} else {
    console.log(`Obesidade Grau III - IMC: ${imc.toFixed(2)}`)
}