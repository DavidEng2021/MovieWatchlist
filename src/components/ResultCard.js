import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'
// movie =Add.js搜尋結果
export const ResultCard = ({movie}) => {
    const {
        addMovieToWatchlist, addMovieToWatched, watchlist, watched
    } = useContext(GlobalContext);

    let storedMovie = watchlist.find(o=>o.id === movie.id);
    let storedMovieWatched = watched.find(o => o.id ===movie.id)

    const watchlistDisabled = storedMovie
    ? true
    :storedMovieWatched
    ? true
    : false;

    const watchedDisabled = storedMovieWatched ? true:false;

    return (
        <div className='result-card'>
            <div className="poster-wrapper">
                {movie.poster_path ? (
                    <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={`${movie.title} Poster`} />
                ):(
                    <div className="filler-poster"></div>
                )}
                {/* 有海報顯示海報，無海報顯示filler */}
            </div>

            <div className="info">
                <div className="header">              
                    <h3 className="title">
                        {movie.title}
                    </h3>
                    <h4 className="release-date">
                        {movie.release_date ? movie.release_date.substring(0, 4):'-'}
                    </h4>
                </div>
                <div className="controls">
                    <button className="btn"
                    disabled = {watchlistDisabled}
                    onClick={()=> addMovieToWatchlist(movie)}>
                        加入清單
                    </button>

                    <button className="btn"
                    disabled = {watchedDisabled}
                    onClick={()=> addMovieToWatched(movie)}>
                        加入已看過清單
                    </button>
                </div>
            </div>
        </div>
    )
}
