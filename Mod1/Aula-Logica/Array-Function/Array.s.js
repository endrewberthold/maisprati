let listaFrutas = Array()
let listaNomes = Array('Giovana', 'Fernada')

listaFrutas[0] = 'maça'
listaFrutas[1] = 'morango'
listaFrutas['adocicadas'] = 'banana'

for(let i = 0; i < listaFrutas.length; i++){
    console.log(listaFrutas[i])
}

listaFrutas.push('melancia') //adiciona no final
listaFrutas.unshift('laranja') //adiciona no começo
listaFrutas.pop() //exclui no final
listaFrutas.shift() //exclui no começo

console.table(listaFrutas)
