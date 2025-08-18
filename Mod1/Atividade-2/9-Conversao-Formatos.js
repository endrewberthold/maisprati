let pares = [["nome", "Ana"], ["idade", 30]]
let objetos = {nome: "Anabele", idade: 35}
let resultado = {}
let arrResultado = []

function paresParaObjeto(){
    for(let par of pares){
        let chave = par[0]
        let valor = par[1]
        resultado[chave] = valor
    }
    return resultado
}
function objetoParaPares(){
    for(let obj in objetos){
        let valor = objetos[obj]
        arrResultado.push([obj, valor])
    }
    return arrResultado
}
console.log(paresParaObjeto())
console.log(objetoParaPares())