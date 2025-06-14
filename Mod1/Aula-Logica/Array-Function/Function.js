function RetornarParOuImpar (valor){
    let resultado

    if(valor % 2 === 0){
        resultado = 'PAR'
    } else{
        resultado = 'IMPAR'
    }
    return resultado
}

let numero = 0
let resultado = RetornarParOuImpar(numero)
console.log(resultado)

console.table(resultado)

function calcularArea (altura, largura) {
    return altura * largura
}

console.log(calcularArea(10, 10))

//fazer uma função que retorne uma array ordenado
/*
function ordenarArray(){
    let numeros = [5, 4, 8, 10, 7, 3, 1]
    numeros.sort((a, b) => a - b)
    return numeros
}
numeros = ordenarArray()
console.log(ordenarArray(numeros))

let exibeNome = function (nome){
    console.log(nome)
}

let exibeNome2 = function (nome) => console.log(nome)

exibeNome2('Endro')
*/
//let sucesso = () => console.log('Requisição foi um sucesso'){
    let erro = function(){
        console.log('Requisição deu errado')
    }

function requisicao(sucesso, erro){
    if (false){
        sucesso('Requisição deu certo mesmo')
    } else {
        erro()
    }
}

requisicao((message) => console.log(message), erro)

//criar uma função que soma os elementos de um array e retorna esse valor

function somarArray(arr){
    let soma = 0
    for(let i = 0; i < arr.length; i++){
    soma += arr[i]
    }
    return soma
}
console.log(somarArray([3, 6, 1, 2, -3]))