/*
let livro = {
    nome: 'LOTR',
    anoLancamento: '1997',
    autor: 'Gandalf',
    nrPaginas: 50,
    gereno: 'Terror',
    atores: ['Jones', 'Vila', 'Dobberman'],

    mostrarCaracteristica: function (){
        return `${this.nome} é um livro estranho.`
    }
}

let livro2 = livro
livro2.preco = 20.5
console.log(livro2)
console.log(livro)

let jogadores = ['testor', 'ejoreg', 'matu']

for(let valor in jogadores){
    console.log(jogadores[valor])
}

let personagens = ['naruto']

for(let value of personagens){
    console.log(value)
}
*/

//calcular as medias das notas dos alunos de um ptofessor e dizer se a turma do professor esta na media

let professor = {
    nome: 'Stark Parker',
    materias: 'Fisica',
    notas: {
        aluno1: [5, 2],
        aluno2: [3, 7]
    }
}
let somaNotas = 0
let numeroAlunos = 0
for(let aluno in professor.notas){
    somaNotas += Array.isArray(professor.notas[aluno]) ? professor.notas[aluno].
    reduce((acc, nota) => acc + nota, 0)/professor.notas[aluno].length : professor.notas[aluno]

    numeroAlunos++
}

let media = somaNotas / numeroAlunos

if(media >= 6){
    console.log(`Média da turma acima do padrão: ${media}`)
} else {
    console.log(`Média dos alunos abaixo do padrão: ${media}`)
}
//somar a media de alunos e dividir pelo numero de alunos