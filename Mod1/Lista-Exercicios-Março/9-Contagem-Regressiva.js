const prompt = require('prompt-sync')()
console.log(`--- Programa Contagem Regressiva ---`)
let num = Number(prompt('Digite um numero para contagem regressiva: '))
console.log(`Tecla Enter para contagem.`)
let contador = 0

while(contador < num){
    let contagem = Number(prompt(`${num - contador}`))
    ++contador
}

/*
for (contador = 0; contador < num; contador++) {
    console.log(num - contador)
}
*/