import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import favoriteMovieReducer from './slices/favoriteMovieSlices'; // Update the import
import movieReducer from './slices/movieSlices';

const store = configureStore({
  reducer: {
    movies: movieReducer,
    favoriteMovie: favoriteMovieReducer,
  },
  middleware: [...getDefaultMiddleware(), thunkMiddleware],
});

export default store;
