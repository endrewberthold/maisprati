const prompt = require('prompt-sync')()

console.log('--- Programa par ou impar ---')
let  num = Number(prompt('Digite um numero: '))

if(num == '' || isNaN(num)) {
    console.log(`Valor invalido inserido`)
} else if(num % 2 == 0){
    console.log(`Número: ${num} é par`)
} else {
    console.log(`Número: ${num} é impar`)
}
