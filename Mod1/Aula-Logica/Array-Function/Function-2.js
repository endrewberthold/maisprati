let nome = "jacques"

console.log(nome.length)
console.log(nome.charAt(0))
console.log(nome.indexOf('B'))

console.log(nome.replace('Endrew', 'Andre'))
console.log(nome.substring(0, 3))
console.log(nome.toUpperCase())
console.log(nome.toLowerCase())

console.log('   Endrew'.trim())

//fazer uma função que inverte uma string

function inverterString () {
    return nome.split('').reverse().join('')
}
let inversao = inverterString()
console.log(inversao)

function reverterString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

console.log(reverterString("Olá Mundo!"))

function localizarVogais(str){
    const vogais = 'aeiouAEIOU'
    let resultado = ''
    for(let i = 0; i <str.length; i++)
    if (vogais.includes(str[i])){
        resultado += str[i]
    }
    return resultado
}

console.log(localizarVogais('ola mundo'))

function countVowels(str){
    let vowels = str.match(/[aeiouAEIOU]/gi)
    return vowels ? vowels.length : 0
}
console.log(countVowels("Paralelepipedo"))