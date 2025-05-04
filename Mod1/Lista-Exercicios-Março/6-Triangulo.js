const prompt = require('prompt-sync')()

console.log('--- Programa Triangulo ---')
let ladoA = Number(prompt('Digite o valor do lado A: '))
let ladoB = Number(prompt('Digite o valor do lado B: '))
let ladoC = Number(prompt('Digite o valor do lado C: '))

let ladoBC = ladoB + ladoC
let ladoAC = ladoA + ladoC
let ladoAB = ladoA + ladoB

if (ladoA < ladoBC && ladoB < ladoAC && ladoC < ladoAB) {
    console.log('Os Valores fornecidos formam um triangulo.')
    let confirmar = Number(prompt('Digite 1 para verificar o triangulo: '))
    if (confirmar === 1) {
        if (ladoA === ladoB && ladoB === ladoC) {
            console.log('Triangulo Equilatero')
        } else if (ladoA != ladoB && ladoB != ladoC){
            console.log('Triangulo Escaleno')
        } else {
            console.log('Triangulo Isósceles')
        }
    } else {
        console.log('Operação cancelada pelo usuário.')
    }
} else {
    console.log('Os Valores fornecidos nao formam um triangulo.')
}