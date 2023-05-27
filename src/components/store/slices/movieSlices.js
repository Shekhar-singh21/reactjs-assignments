import { createSlice } from '@reduxjs/toolkit';
import { fetchMovies } from '../actions/movieActions';

const movieSlice = createSlice({
  name: 'movies',
  initialState: {
    movies: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.movies = action.payload;
        state.error = null;
        console.log(state.movies)
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.movies = [];
        state.error = action.error.message;
      });
  },
});

export default movieSlice.reducer;
