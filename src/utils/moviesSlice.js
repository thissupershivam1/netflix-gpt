// moviesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  nowPlayingMovies: null,
  trailerVideos: null,
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideos: (state, action) => {
      state.trailerVideos = action.payload;
    },
  },
});

export const { addNowPlayingMovies,addTrailerVideos } = moviesSlice.actions;
export const selectNowPlayingMovies = (state) => state.movies.nowPlayingMovies;

export default moviesSlice.reducer;
