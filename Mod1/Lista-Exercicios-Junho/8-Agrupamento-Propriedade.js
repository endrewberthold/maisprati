let vendas = [
    {nome: 'Paulo', total: 100},
    {nome: 'Ana', total: 150},
    {nome: 'Paulo', total: 90},
    {nome: 'Ana', total: 350},
    {nome: 'John', total: 10},
    {nome: 'John', total: 130},
]
function retornarTotal(vendas){
    return vendas.reduce((acumulador, venda) =>{
        if(acumulador[venda.nome]){
            acumulador[venda.nome] += venda.total
        } else{
            acumulador[venda.nome] = venda.total
        }
        return acumulador
    }, {})
}
console.table(retornarTotal(vendas))