import React, { useEffect } from "react";
import { getMovies, getMovieById } from './api/omdb.js'

export default function App(){
useEffect(() =>{
async function testeApi(){
try {
const searchResult = await getMovies('Batman');
console.log(searchResult)

const first = searchResult?.Search?.[0]?.imdbID;
if (first){
const details = await getMovieById(first);
console.log(details);
}
} catch (err) {
console.log(err)
}
}
testeApi()
}, [])
return <div>teste OMDB</div>

}

Componente importado dentro do app para pegar o primeiro valor de resposta da API