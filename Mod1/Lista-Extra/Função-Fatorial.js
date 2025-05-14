function calcularFatorial (num){
    let fatorial = 1

    for(let i = 1; i <= num; i++){
        fatorial *= i
    }
    console.log(fatorial)
}
calcularFatorial(5)