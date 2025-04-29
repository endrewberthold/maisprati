const prompt = require('prompt-sync')()

let totalEleitores = Number(prompt('Total Eleitores: '))
let votosNulos = Number(prompt("Numero de Nulos: "))
let votosBrancos = Number(prompt("Numero de Brancos: "))

let votosValidos = totalEleitores - (votosBrancos + votosNulos)

let percentualNulos = (votosNulos / totalEleitores) * 100
let percentualBrancos = (votosBrancos / totalEleitores) * 100
let percentualValidos = (votosValidos / totalEleitores) * 100

console.log('')
console.log(`Total Eleitores: ${totalEleitores}`)
console.log(`Percentual de votos Brancos: ${percentualBrancos.toFixed(2)}%`)
console.log(`Percentual de votos Nulos: ${percentualNulos.toFixed(2)}%`)
console.log(`Percentual de votos Validos: ${percentualValidos.toFixed(2)}%`)

