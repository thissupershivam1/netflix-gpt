// moviesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  nowPlayingMovies: null,
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
  },
});

export const { addNowPlayingMovies } = moviesSlice.actions;
export const selectNowPlayingMovies = (state) => state.movies.nowPlayingMovies;

export default moviesSlice.reducer;
