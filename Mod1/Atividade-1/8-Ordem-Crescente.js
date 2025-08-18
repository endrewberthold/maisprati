const prompt = require('prompt-sync')()
console.log('--- Programa Ordem Crescente ---')
let num1 = Number(prompt('1º Numero: '))
let num2 = Number(prompt('2º Numero: '))

if (num1 === '' || isNaN(num1) || (num2 === '' || isNaN(num2))) {
    return
}

while (num1 === num2) {
    console.log('Digite valores diferentes')
    num1 = Number(prompt('1º Numero: '))
    num2 = Number(prompt('2º Numero: '))
}
if (num1 > num2) {
    console.log(num2, num1)
} else {
    console.log(num1, num2)
}

