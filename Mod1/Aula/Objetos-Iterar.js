let livraria = [
    {titulo: "1984", autor: "George Orwell", ano: 1984},
    {titulo: "O Profeta", autor: "Endrew Berthold", ano: 2001},
    {titulo: "Código Limpo", autor: "Martin", ano: 2010},
    {titulo: "O Velho e o Mar", autor: "Hemmingway", ano: 1910},
    {titulo: "O Príncipe", autor: "Maquiável", ano: 2002},
]
for (let livro of livraria){
    if (livro.ano < 2000){
        console.log(livro)
    }
}

//for of para iterar e verificar os livros publicados antes do ano 2000

//listar a contagem de filmes por genero

let filmes = [
    {titulo:"Sempre ao seu lado", genero: "De chorar"},
    {titulo:"Massacre da Serra Elétrica", genero: "Terror"},
    {titulo:"Minha Mãe é uma Peça", genero: "Comédia"},
    {titulo:"Tarzan", genero: "Aventura"},
    {titulo:"Como eu Era Antes de Você", genero: "De chorar"},
    {titulo:"Jogo da Imitação", genero: "Histórico"},
    {titulo:"Top Gun", genero: "Guerra"},
    {titulo:"Your Name", genero: "Romance"},
    {titulo:"Deadpool", genero: "Herói"},
    {titulo:"Batman Forever", genero: "Herói"},
]

let contagemGeneros = {}

for(let i = 0; i < filmes.length; i++){
    let genero = filmes[i].genero
    if(contagemGeneros[genero]){
        contagemGeneros[genero]++
    } else {
        contagemGeneros[genero] = 1
    }
}

for (let genero in contagemGeneros){
    console.log(`${genero}: ${contagemGeneros[genero]}`)
}

console.table(contagemGeneros)

filmes.forEach(filme => {
    if(contagemGeneros[filme.genero]){
        contagemGeneros[filme.genero]++
    } else {
        contagemGeneros[filme.genero] = 1
    }
})