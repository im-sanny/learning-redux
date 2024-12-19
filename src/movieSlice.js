import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  movies: [
    { id: '1', name: 'LOTR' },
    { id: '2', name: 'Hobbits' },
  ],
};

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovie: (state, action) => {
      const newMovie = {
        id: state.movies[state.movies.length - 1] + 1,
        name: action.payload,
      }

      state.movies.push(newMovie);
    },
    removeMovie: (state, action) => {},
  },
});

export const { addMovie, removeMovie } = movieSlice.actions;
export default movieSlice.reducer;