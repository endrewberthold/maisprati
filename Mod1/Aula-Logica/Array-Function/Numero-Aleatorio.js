function numeroRandom(num1, num2) {
    return Math.floor(Math.random()*num1 + num2)
}
console.log(numeroRandom(1, 5))

let date1 = new Date(2015, 7, 7);
let date2 = new Date(2025, 7, 7);

console.log(date1.getTime())
console.log(date2.getTime())

let mili = Math.abs(date1.getTime() - date2.getTime());

let miliPorDia = (1 * 24 * 60 * 60* 1000)


//formatar uma data