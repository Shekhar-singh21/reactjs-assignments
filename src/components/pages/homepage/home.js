import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Logo from "../../atoms/logos/logo";
import NavLinks from "../../molecules/navlinks/navlinks";
import style from './home.module.css';
import { fetchMovies } from "../../store/actions/movieActions";
import Button from "../../atoms/button/button";
import { addToFavorites } from "../../store/slices/favoriteMovieSlices";

export default function Home() {
    const dispatch = useDispatch();
    const movies = useSelector((state) => state.movies.movies);
    const loading = useSelector((state) => state.movies.loading);
    const error = useSelector((state) => state.movies.error);


    useEffect(() => {
        dispatch(fetchMovies());
    }, [dispatch]);

    console.log(movies)
    function handleFavorite(movie) {
        dispatch(addToFavorites(movie));
        alert("Added to favorite list");
      }

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <>
            <div className={style.wrapper}>
                <div className={style.topbar}>

                    <Logo />
                    <NavLinks />


                </div>
                <section>
                <div className={style.card}>
                    {movies.map((movie) => (
                        <li key={movie.title} className={style.movieList}>
                            <img src={movie.Poster} alt="Not Found" />
                            <h1>{movie.Title}</h1>
                            <h5> {movie.Year}</h5>
                            <p>{movie.imdbID}</p>
                 <Button text="Add to Favorite" performTask={() => handleFavorite(movie)} />


                        </li>
                    ))}
                </div>
                </section>
            </div>
        </>
    );
}
