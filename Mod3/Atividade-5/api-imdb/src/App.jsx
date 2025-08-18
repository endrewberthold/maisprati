import React, {useEffect, useState} from "react";

function App(){
    const [search, setSearch] = useState('');
    const [movies, setMovies] = useState([])
    const [selectedMovie, setSelectedMovie] = useState(null)
    const [favorites, setFavorites] = useState([])

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('movie-app-favorites'));
        if(saved) {
            setFavorites(saved);
        }
    }, []);

    return (
        <div>
            <h1>Omdb Finder</h1>
            <form onSubmit={handleSearch}>
                <input
                    type={"text"}
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    placeholder="Digite o nome do filme..."
                    />
                <button type={"submit"}>Buscar</button>
            </form>
            <h2>Favoritos</h2>
            <ul>
                {favorites.map(movie => (
                    <li key={movie.imdbID}>
                        {movie.Title} ({movie.Year}
                        <button onClick={() => removeFromFavorites(movie)}>Remover</button>
                    </li>
                ))}
            </ul>
            <h2>Resultados</h2>
            <ul>
                {movies.map(movie => (
                    <li key={movie.imdbID}>
                        <img src={movie.Poster} alt="Poster" width="50" />
                        {movie.Title} ({movie.Year}
                        <button onClick={() => fetchMovieDetails(movie.imdbID)}>Detalhes</button>
                    </li>
                ))}
                {selectedMovie &&(
                    <div>
                        <h2>{selectedMovie.Title} ({selectedMovie.Year})</h2>
                        <img src={selectedMovie.Poster} alt={selectedMovie.Title} width="100" />
                        <p><strong>Genero:</strong> {selectedMovie.Genre}</p>
                        <p><strong>Sinopse:</strong> {selectedMovie.Plot}</p>
                        <button onClick={() => setSelectedMovie(null)}>Fechar Detalhes</button>
                        <button onClick={() => addToFavorites(selectedMovie)}>Favoritar</button>
                    </div>
                )}
            </ul>
        </div>
    )
    async function handleSearch(e) {
        e.preventDefault();
        const apiKey = "7b6983cd";
        const url = `https://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(search)}`;
        const response = await fetch(url);
        const data = await response.json();
        if (data.Search) {
            setMovies(data.Search);
        } else {
            //tratamento de erros sera implementado depois
            setMovies([]);
        }
    }
    async function fetchMovieDetails(id){
        const apiKey = "7b6983cd";
        const url = `https://www.omdbapi.com/?apikey=${apiKey}&i=${id}`;
        const response = await fetch(url);
        const data = await response.json();
        if (data.Response === "True"){
            setSelectedMovie(data);
        } else {
            setSelectedMovie(null)
        }
    }
    function saveFavorites(items){
        localStorage.setItem('movie-app-favorites', JSON.stringify(items));
    }
    function addToFavorites(movie) {
        const newList = [...favorites, movie];
        setFavorites(newList);
        saveFavorites(newList);
    }
    function removeFromFavorites(movie){
        const newList = favorites.filter(m =>m.imdbID !== movie.imdbID);
        setFavorites(newList);
        saveFavorites(newList);
    }
}
export default App;