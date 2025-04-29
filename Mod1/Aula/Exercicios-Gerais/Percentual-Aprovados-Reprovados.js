/* A turma C é composta de 60 alunos, e a turma D de 20
alunos. Escreva um algoritmo que leia o percentual de
alunos reprovados na turma C, o percentual de aprovados
na turma D, calcule e escreva:

a) O número de alunos reprovados na turma C.
b) O número de alunos reprovados na turma D.
c) A percentagem de alunos reprovados em relação
ao total de alunos das duas turmas.

Entradas
10
85
 */

const prompt = require('prompt-sync')()

let turmaC = 60
let turmaD = 20

let percentualC = Number(prompt('Percentual de reprovados Turma C: '))
let percentualD = Number(prompt('Percentual de aprovados Turma D: '))

let reprovadosC = (percentualC / 100) * turmaC;
let reprovadosD = ((100 - percentualD) / 100) * turmaD;

let totalReprovados = reprovadosC + reprovadosD
let totalAlunos = turmaC + turmaD;

let percentualReprovadosTotal = (totalReprovados / totalAlunos) * 100

console.log(`Reprovados Turma C: ${reprovadosC}`);
console.log(`Reprovados Turma D: ${reprovadosD}`)
console.log(`Reprovados Total: ${percentualReprovadosTotal.toFixed(2)}%`);