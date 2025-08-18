let produtos = [
    { nome: "Camiseta", preco: 50 },
    { nome: "Calça", preco: 100 },
    { nome: "Boné", preco: 30 }
]
function ordenarProdutos(){
    let ordenados = produtos.sort((a, b) =>a.preco - b.preco)
    return ordenados.map(produto => produto.nome)
}
console.table(produtos)
console.log(`Array ordenado: ${ordenarProdutos()}`)