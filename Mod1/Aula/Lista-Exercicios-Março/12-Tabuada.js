const prompt = require('prompt-sync')()

console.log('--- Programa Tabuada ---')
let num = Number(prompt('Digite um valor para calcular a tabuada: '))

if (num == '' || isNaN(num)) {
    return
}
for(let i = 1; i <= 10; i++){
    console.log(`${num} x ${i} = ${num * i}`)
}