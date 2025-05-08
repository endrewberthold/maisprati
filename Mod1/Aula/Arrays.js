// Crie um array chamado 'numeros' contendo 10 valores numéricos à sua escolha.

// Use métodos de array para calcular:

// A soma de todos os elementos.

// A média dos elementos.
// Gere um novo array chamado pares que contenha apenas os números pares de numeros.

// Imprima no console:

// O array original 'numeros'

// A soma

// A média

// O array pares
/*
let numeros = [12, 24, 3, 42, 533, 6, 7, 86, 9, 10]
numeros.sort((a, b) => a - b)

console.log(numeros)

let soma = 0
let media = 0
let pares = []
for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i]
    if(numeros[i] % 2 === 0) {
        pares.push(numeros[i])
    }
}
media = soma/numeros.length

console.log(soma)
console.log(media)
console.log(pares)

let soma = reduce((acumulador, valor) => acumulador + valor, 0)
let pares = numeros.filter((num => num % 2 === 0))
 */

//bubbleSort

let numeros = [3, 6, 1, 2, -3]
let n = numeros.length

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (numeros[j] > numeros[j + 1]) {
            let temp = numeros[j]
            numeros[j] = numeros[j + 1]
            numeros[j + 1] = temp
        }
    }
}
console.log(numeros)

let matriz = []
let soma = 0

for(let i = 0; i < 3; i++){
    matriz[i] = []
    for(let j = 0; j < 3; j++){
        matriz[i][j] = 10
        if (i === j){
            soma += matriz[i][j]
        }
    }
}
console.table(matriz)
console.log(soma)