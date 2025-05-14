function fibonacci(num1, num2) {
    for (let i = 2; i <= 10; i++) {
        let proximo = num1 + num2
        console.log(proximo)
        num1 = num2
        num2 = proximo
    }
}
fibonacci(0, 1)