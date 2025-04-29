const prompt = require('prompt-sync')()
let graus = Number(prompt("Informe a temperatura em graus Celsius: "))
let grausF = (graus * ( 9 / 5 )) + 32
console.log(`Temperatura em Fahrenheit: ${grausF}ºF`)