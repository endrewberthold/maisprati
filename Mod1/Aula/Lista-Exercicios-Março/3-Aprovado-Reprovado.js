const prompt =  require('prompt-sync')()

let notaA = Number(prompt('1ª Nota: '))
let notaB = Number(prompt('2ª Nota: '))

let media = (notaA + notaB) / 2

if (media == '' || isNaN(media)) {
    console.log(`Valor invalido inserido`);
}
if (media < 5){
    console.log(`Aluno reprovado, média: ${media.toFixed(1)}`)
} else if (media < 7){
    console.log(`Aluno em recuperação: ${media.toFixed(1)}`)
    let notaC = Number(prompt('Nota de recuperação: '))
    let recuperacao = (notaA + notaB + notaC) / 3
    if (recuperacao < 7) {
        console.log(`Média do aluno: ${recuperacao.toFixed(1)}. Aluno reprovado`)
    } else {
        console.log(`Média do aluno: ${recuperacao.toFixed(1)}. Aluno aprovado`)
    }
} else {
    console.log(`Aluno aprovado.`)
}