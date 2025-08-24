import React from "react";
import useFavorites from "../hooks/useFavorites.js";

function TesteHook() {
const { favorites, add, remove, toggle, isFavorite } = useFavorites()

React.useEffect(() => {
console.log(favorites);
}, [favorites])

return (
<div>
<p>Total de Favoritos: {favorites.length}</p>
<button onClick={() => {
const exemplo = {imdbID: 'tt1234567', Title: 'Filme', Year: '2025', Poster: 'N/A'}
add(exemplo);
}}>
Adicionar Exemplo
</button>
<button onClick={() => {
const id = favorites[0]?.imdbID
if (id) remove(id);
}}>
Remover primeiro favorito
</button>
</div>
)
}
export default function SearchPage() {
return(
<div>
<h1>Teste do HOOK de favoritos</h1>
<TesteHook />
</div>
)
}