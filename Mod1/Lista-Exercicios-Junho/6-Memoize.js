function memoize(fn){
    let cache = {}

    return function(...args) {
        let chave = JSON.stringify(args)

        if (chave in cache){
            return cache[chave]
        } else {
            let resultado = fn(...args)
            cache[chave] = resultado
            return resultado
        }
    }
}

function multiplicar(a, b){
    console.log('Calculando...')
    return a * b
}
let multplicarMemo = memoize(multiplicar)

console.log(multplicarMemo(2, 5))
console.log(multplicarMemo(2, 5))
console.log(multplicarMemo(2, 9))