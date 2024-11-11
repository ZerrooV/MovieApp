import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from './components/Header';
import Movies from './components/Movies';
import { setSearchQuery, fetchMovies } from './store/moviesSlices';

function App() {
  const dispatch = useDispatch();
  const { movies, searchQuery, loading } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchMovies(searchQuery));
  }, [dispatch, searchQuery]);

  const handleSearchChange = (event) => {
    dispatch(setSearchQuery(event.target.value));
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    dispatch(fetchMovies(searchQuery.trim()));
  };

  return (
    <>
      <Header searchQuery={searchQuery} onSearchChange={handleSearchChange} onSearchSubmit={handleSearchSubmit} />
      <Movies movies={movies} loading={loading} searchQuery={searchQuery} />
    </>
  );
}

export default App;
