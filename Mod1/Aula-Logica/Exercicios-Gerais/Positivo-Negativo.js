/*Escreva um algoritmo para repetir a leitura de um número
 enquanto o valor fornecido for diferente de 0.
 Para cada número fornecido, imprimir se ele é NEGATIVO ou POSITIVO.
 Quando o número 0 for fornecido a repetição deve ser encerrada
 sem imprimir mensagem alguma.
 */
const prompt = require('prompt-sync')()

let num
do {
    num = Number(prompt('Digite um número: '))
    if (num > 0) {
        console.log(`Numero ${num} é positvo`)
    } else if (num < 0) {
        console.log(`Numero ${num} é negativo`)
    } else{
        console.log(`O usuário digitou 0, encerrando.`)
    }
} while (num !== 0)