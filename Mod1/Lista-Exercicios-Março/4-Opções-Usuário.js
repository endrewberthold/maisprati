const prompt = require('prompt-sync')()

console.log('--- Programa Selecione 3 Opções ---')
let num = Number(prompt('Digite 1 para exibir | Digite 2 para cancelar: '))

while (num === '' || isNaN(num) || (num != 1 && num != 2)) {
    num = Number(prompt('Opção inválida, Digite 1 para exibir | Digite 2 para cancelar: '))
}

let opcao = ''

if (num == 1) {
    console.log('Opção 1 - Monza \n' +
        'Opção 2 - Chevette \n' +
        'Opção 3 - Celta')
    opcao = Number(prompt('Digite a opção: '))
} else if (num == 2) {
    console.log('Operação cancelada pelo usuário')
} else {
    return
}
switch (opcao) {
    case 1:
        console.log('\nChevrolet Monza 1995, Cambio Manual Motor 2.0 a Gasolina')
        break
    case 2:
        console.log('\nChevrolet Chevette 1998, Cambio Manual motor 2.0 a Gasolina, Tração traseira')
        break
    case 3:
        console.log('\nChevrolet Celta 2002, Cambio Manual Motor 1.0 Flex')
        break
    default:
        return
}