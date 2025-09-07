import React, {useEffect, useRef} from "react";

const MovieModal = ({
                        movieInfo,
                        handleClose,
                        onToggleFavorite,
                        isFavorite,
                        loadingDetails
                    }) => {
    if (!movieInfo) return null;

    const closeBtnRef = useRef(null)
    const prevFocused = useRef(null)

    useEffect(() => {
        prevFocused.current = document.activeElement;
        if (closeBtnRef.current) closeBtnRef.current.focus();

        const keyDown = (e) => {
            if (e.key === 'Escape') {
                e.preventDefault()
                handleClose()
            }
        }
        document.addEventListener('keydown', keyDown);

        return () => {
            if (prevFocused.current && prevFocused.current.focus) {
                prevFocused.current.focus()
            }
            document.removeEventListener('keydown', keyDown)
        }
    }, [handleClose]);

    const overlayClick = (e) => {
        if (e.target === e.currentTarget) {
            handleClose()
        }
    };

    return (
        <div
            className="modal"
            role='dialog'
            aria-modal='true'
            aria-labelledby='movieModalTitle'
            onClick={overlayClick}>
            <div
                className="content"
                onClick={(e) => e.stopPropagation()}>
                <button
                    ref={closeBtnRef}
                    className="closeBtn"
                    onClick={handleClose}
                    aria-label='Fechar'>x</button>

                {loadingDetails ? (
                    <div className='modalLoading' aria-busy='true' aria-live='polite'>
                        <div className='spinner' />
                    </div>
                ) : (
                    <>
                        <div className="contentRow">
                            <div className="modalPoster">
                                {movieInfo.Poster && movieInfo.Poster !== "N/A" ? (
                                    <img src={movieInfo.Poster} alt={`${movieInfo.Title} Poster`} />
                                ) : (
                                    <div className="placeholder">Sem poster</div>
                                )}
                            </div>

                            <div className="modalInfo">
                                <div className="modalHeader">
                                    <h2 id="movieModalTitle">
                                        {movieInfo.Title} <span className="movieYear">({movieInfo.Year})</span>
                                    </h2>

                                    <div className="modalActions">
                                        <button
                                            onClick={onToggleFavorite}
                                            className={`favoriteBtn ${isFavorite ? "favorite-activate" : ""}`}
                                            aria-pressed={isFavorite}
                                            disabled={loadingDetails}
                                        >
                                            {isFavorite ? "Remover favorito" : "Adicionar aos favoritos"}
                                        </button>
                                    </div>
                                </div>

                                <div className="modalText">
                                    <p><b>Plot:</b> {movieInfo.Plot}</p>
                                    <p><b>Actors:</b> {movieInfo.Actors}</p>
                                    <p><b>Genre:</b> {movieInfo.Genre}</p>
                                    <p><b>Director:</b> {movieInfo.Director}</p>
                                    <p><b>Released:</b> {movieInfo.Released}</p>
                                </div>
                            </div>
                        </div>
                    </>

                )}
            </div>
        </div>
    );
};

export default MovieModal;
