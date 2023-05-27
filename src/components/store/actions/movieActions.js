
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
  try {
    const response = await fetch('https://www.omdbapi.com/?s=action&apikey=acac0345&page=1');
    if (!response.ok) {
      throw new Error('Failed to fetch movies');
    }
    const data = await response.json();
    const movies = data.Search;
    return movies;
  } catch (error) {
    throw new Error('Failed to fetch movies');
  }
});
