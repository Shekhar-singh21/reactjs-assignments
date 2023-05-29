import React from "react";
import { useSelector, useDispatch } from "react-redux";
import style from "./favMovies.module.css";
import Button from "../../atoms/button/button";
import { removeFromFavorites } from "../../store/slices/favoriteMovieSlices";

export default function Favorites() {
  const favoriteMovies = useSelector((state) => state.favoriteMovie.favorites);
  const dispatch = useDispatch();

  const handleRemoveFromFavorites = (imdbID) => {
    dispatch(removeFromFavorites(imdbID));
  };

  return (
    <div className={style.wrapper}>
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
              <Button
                text="Remove from Favorites"
                performTask={() => handleRemoveFromFavorites(movie.imdbID)}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
