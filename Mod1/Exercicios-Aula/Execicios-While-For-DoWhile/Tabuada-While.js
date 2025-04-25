const prompt = require('prompt-sync')()

let num = Number(prompt("Digite um numero para calcular a tabuada:"))
let contador = 0;

while(contador <= 10){
    console.log(`${num} x ${contador} = ${num * contador}`);
    contador++;
}

