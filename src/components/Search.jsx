import PropTypes from 'prop-types';

function Search({ searchQuery, onSearchChange, handleSearchSubmit }) {
  return (
    <form className="d-flex" role="search" onSubmit={handleSearchSubmit}>
      <input
        className="form-control"
        type="search"
        placeholder="Search"
        aria-label="Search"
        value={searchQuery}
        onChange={onSearchChange}
      />
      <button className="btn btn-dark" type="submit">Search</button>
    </form>
  );
}

Search.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  handleSearchSubmit: PropTypes.func.isRequired,
};

export default Search;
