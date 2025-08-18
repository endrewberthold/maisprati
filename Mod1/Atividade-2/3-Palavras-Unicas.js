const prompt = require('prompt-sync')()

function palavrasUnicas() {
    let texto = prompt('Digite o texto: ')
    let arr = texto.split(" ")
    let unicas = []

    console.log(arr)
    console.log(arr.length)

    for (let i = 0; i < arr.length; i++) {
        if (unicas.includes(arr[i]) === false) {
            unicas.push(arr[i])
        }
    }
    console.log(unicas)
    console.log(unicas.length)
}
palavrasUnicas()