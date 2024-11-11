import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './moviesSlices';

const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
});

export default store;
