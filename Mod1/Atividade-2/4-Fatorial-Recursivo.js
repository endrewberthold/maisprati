function fatorial(n){
    if (n < 0){
        throw new Error('Numero negativo não permitido')
    } else if (n === 0){
        return 1
    } else {
        return n * fatorial(n - 1)
    }
}
console.log(fatorial(5))