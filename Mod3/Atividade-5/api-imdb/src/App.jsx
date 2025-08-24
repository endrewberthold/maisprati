import React from "react";
import Search from "./components/Search.jsx";

const App = () => {
    return (
        <div className="container">
            <header className="header">
                <h1>Omdb Finder</h1>
                <p className="subtitle">Busque filmes, veja detalhes e gerencie favoritos</p>
            </header>

            <main className="main">
                {/* Componente de busca, paginação e modal */}
                <Search />
            </main>

            <footer className="footer">
                <small>Dados fornecidos pela OMDb API</small>
            </footer>
        </div>
    );
};

export default App;
