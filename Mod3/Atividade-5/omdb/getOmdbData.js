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