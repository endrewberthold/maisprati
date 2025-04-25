const prompt = require('prompt-sync')()
let num = Number(prompt('Digite um valor para calcular a tabuada: '));

for (contador = 0; contador <= 10; contador++) {
    console.log(`${num} x ${contador} = ${num * contador}`);
}