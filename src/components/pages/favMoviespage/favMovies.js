import React from "react";
import { useSelector } from "react-redux";
import style from './favMovies.module.css';

export default function Favorites() {
  const favoriteMovies = useSelector((state) => state.favoriteMovie.favorites);

  return (
    <div>
      <h1>Favorite Movies</h1>
      {favoriteMovies.length === 0 ? (
        <p>No favorite movies added.</p>
      ) : (
        <ul className={style.movieList}>
          {favoriteMovies.map((movie) => (
            <li key={movie.imdbID}>
              <img src={movie.Poster} alt="Not Found" />
              <h1>{movie.Title}</h1>
              <h5>{movie.Year}</h5>
              <p>{movie.imdbID}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
