import PropTypes from 'prop-types';

function Movies({ movies, loading, searchQuery }) {
  return (
    <div className="container">
      <h3 className="mt-3 text-secondary">Movies related to: {searchQuery}</h3>
      {loading && <h1 className='d-flex justify-content-center align-items-center'>Loading...</h1>}
      {movies.length === 0 && !loading && <h1 className='d-flex justify-content-center align-items-center'>No movies found</h1>}
      
      <div className="row">
        {movies.map((movie) => (
          <div key={movie.imdbID} className="col-6 col-sm-4 col-md-3 col-lg-5-cols mb-4">
            <div className="card h-100">
              <div className="ratio ratio-1x1">
                <img src={movie.Poster} className="card-img-top" alt={movie.Title} style={{ objectFit: 'cover' }} />
              </div>
              <div className="card-body" style={{ backgroundColor: '#EC8305' }}>
                <p className="card-text text-white text-center">{movie.Title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

Movies.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      imdbID: PropTypes.string.isRequired,
      Poster: PropTypes.string,
      Title: PropTypes.string.isRequired,
    })
  ).isRequired,
  loading: PropTypes.bool.isRequired,
  searchQuery: PropTypes.string.isRequired,
};

export default Movies;
