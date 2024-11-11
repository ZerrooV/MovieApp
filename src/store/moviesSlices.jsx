import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const apiKey = '88f5d95f';

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    movies: [],
    searchQuery: 'Alien',
    loading: false,
  },
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setMovies, setSearchQuery, setLoading } = moviesSlice.actions;

export const fetchMovies = (searchQuery) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    await new Promise(resolve => setTimeout(resolve, 1000));
    const response = await axios.get(`http://www.omdbapi.com/?s=${searchQuery}&apikey=${apiKey}`);
    dispatch(setMovies(response.data.Search || []));
  } catch (error) {
    console.error("Error fetching movies:", error);
    dispatch(setMovies([]));
  } finally {
    dispatch(setLoading(false));
  }
};

export default moviesSlice.reducer;
