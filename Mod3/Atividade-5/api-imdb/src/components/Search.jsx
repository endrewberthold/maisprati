import React, {useEffect, useState} from "react";
import axios from "axios";
import MovieModal from "./MovieModal.jsx";

const apiKey = "7b6983cd";
const baseUrl = "https://www.omdbapi.com/";

const FAVORITES_KEY = 'favorites'

const safeParse = (str, fallback) => {
    try {
        return JSON.parse(str) ?? fallback;
    } catch {
        return fallback;
    }
}

const Search = () => {
    //busca e lista
    const [searchTerm, setSearchTerm] = useState("");
    const [movies, setMovies] = useState([]);
    const [totalResults, setTotalResults] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);

    //modal e detalhes
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [loadingDetails, setLoadingDetails] = useState(false)

    //loading e erros
    const [loadingList, setLoadingList] = useState(false)
    const [error, setError] = useState(null)

    //favoritos
    const [favorites, setFavorites] = useState([])

    //paginação
    const totalPages = Math.ceil(totalResults / 10);

    //carrega favoritos do localstorage na montagem
    useEffect(() => {
        const storage = safeParse(localStorage.getItem(FAVORITES_KEY), [])
        setFavorites(storage)
    }, []);

    //salve alterações sempre que favorites mudar
    useEffect(() => {
        try {
            localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites))
        } catch (e) {
            console.log(`Erro ao salvar favorito: ${e}`)
        }
    }, [favorites]);

    //guarda um objeto em favoritos
    const favoriteMovie = (movie)=> ({
        imdbID: movie.imdbID,
        Title: movie.Title,
        Year: movie.Year,
        Poster: movie.Poster,
    })

    const isFavorite = (imdbID) => favorites.some((f) => f.imdbID === imdbID)

    const addFavorite = (movie) => {
        const isFav = favoriteMovie(movie)
        if (isFavorite(isFav.imdbID)) return;
        setFavorites((prev) => [isFav, ...prev])
    }

    const removeFavorite = (imdbID) => {
        setFavorites((prev) => prev.filter((f) => f.imdbID !== imdbID))
    }

    const toggleFavorite = (movie) => {
        if (!movie || !movie.imdbID) return;
        if (isFavorite(movie.imdbID)){
            removeFavorite(movie.imdbID);
        } else {
            addFavorite(movie)
        }
    }

    const fetchMovies = async (page = 1) => {
        setError(null);
        setLoadingList(true);
        try {
            if (!searchTerm.trim()){
                setMovies([]);
                setTotalResults(0);
                setLoadingList(false)
                return;
            }
            const response = await axios.get(baseUrl, {
                params: {
                    apikey: apiKey,
                    s: searchTerm,
                    type: "movie",
                    page: page,
                },
            });

            if (response.data.Response === "True") {
                setMovies(response.data.Search);
                setTotalResults(Number(response.data.totalResults || 0));
                setCurrentPage(page);
            } else {
                setMovies([]);
                setTotalResults(0);
                setError(response.data.Error || 'Nenhum resultado encontrado')
            }
        } catch (err) {
            console.error("Erro ao buscar filmes:", err);
            setError('Erro na requisição')
            setMovies([])
            setTotalResults(0)
        } finally {
            setLoadingList(false)
        }
    };

    const fetchDetails = async (imdbID) => {
        setLoadingDetails(true);
        setSelectedMovie(null)
        try {
            const response = await axios.get(baseUrl, {
                params: { apikey: apiKey, i: imdbID, plot: "full" },
            });
            if (response.data.Response === "True") {
                setSelectedMovie(response.data);
            } else {
                setError(response.data.Error || 'Erro ao obter detalhes')
            }
        } catch (err) {
            console.error("Erro ao buscar detalhes:", err);
            setError('Erro na requisição')
        } finally {
            setLoadingDetails(false)
        }
    };

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            fetchMovies(1);
        }
    };

    const openDetails = (imdbID) => {
        fetchDetails(imdbID)
        window.scrollTo({top: 0, behavior: 'smooth' })
    }

    const closeModal = () => setSelectedMovie(null)

    return (
        <div>
            {/* Formulário de busca */}
            <form onSubmit={handleSearch}>
                <div className='searchBar'>
                    <label htmlFor='name' />
                    <input
                        id="name"
                        type="text"
                        value={searchTerm}
                        placeholder="Digite o nome do filme..."
                        onChange={(e) => setSearchTerm(e.target.value)}
                        disabled={loadingList}
                    />
                    <button type="submit" disabled={loadingList}>
                        {loadingList ? "Buscando...": "Buscar"}
                    </button>
                </div>
            </form>

            {error && <div className='errorMsg' role='alert'>{error}</div>}

            {favorites.length > 0 && (
                <section className='favoritesList'>
                    <h3>Favoritos</h3>
                    <div className='cards'>
                        {favorites.map((f) => (
                            <div key={f.imdbID} className='movieCard'>
                                {f.Poster && f.Poster !== 'N/A' ? (
                                    <img src={f.Poster} alt={(f.Title)} />
                                ) : (
                                    <div className='placeholder'>Sem Poster</div>
                                )}
                                <p>{f.Title}<span>{f.Year}</span></p>
                                <div className='favActions'>
                                    <button onClick={() => fetchDetails(f.imdbID)}>
                                        Detalhes
                                    </button>
                                    <button onClick={() => removeFavorite(f.imdbID)} className='removeBtn'>
                                        Remover
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {loadingList && (
                <div>
                    <div className='spinner' aria-hidden='true' />
                </div>
            )}

            {/* Listagem de filmes */}
            {movies.length > 0 && (
                    <div className="movies">
                        {movies.map((movie) => (
                            <div key={movie.imdbID} className="movieCard">
                                <div className="cardMedia">
                                    {movie.Poster && movie.Poster !== "N/A" ? (
                                        <img src={movie.Poster} alt={movie.Title} />
                                    ) : (
                                        <div className="placeholder">Sem poster</div>
                                    )}

                                    <div className="mediaOverlay">
                                        <div className="mediaTitle">
                                            <span className="titleText">{movie.Title}</span>
                                            <span className="movieYear">({movie.Year})</span>
                                        </div>

                                        <div className="mediaActions">
                                            <button onClick={() => fetchDetails(movie.imdbID)}>Detalhes</button>
                                            <button
                                                className={`favoriteBtn ${isFavorite(movie.imdbID) ? "favorite-activate" : ""}`}
                                                onClick={() => toggleFavorite(movie)}
                                            >
                                                {isFavorite(movie.imdbID) ? "★" : "☆"}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

            {/* Paginação */}
            {totalPages > 1 && (
                <div className="pagination">
                    <button
                        disabled={currentPage === 1}
                        onClick={() => fetchMovies(currentPage - 1)}
                    >
                        Anterior
                    </button>
                    <span>Página {currentPage} de {totalPages}</span>
                    <button
                        disabled={currentPage === totalPages}
                        onClick={() => fetchMovies(currentPage + 1)}
                    >
                        Próxima
                    </button>
                </div>
            )}

            {/* Modal */}
            {selectedMovie && (
                <MovieModal
                    movieInfo={selectedMovie}
                    handleClose={() => setSelectedMovie(null)}
                    onToggleFavorite={() => toggleFavorite(selectedMovie)}
                    isFavorite={isFavorite(selectedMovie.imdbID)}
                    loadingDetails={loadingDetails}
                />
            )}
        </div>
    );
};

export default Search;
