import PropTypes from 'prop-types';
import Search from './Search';

function Header({ searchQuery, onSearchChange, handleSearchSubmit }) {
  return (
    <div className='head' style={{ backgroundColor: '#EC8305' }}>
      <div className="container d-flex justify-content-between p-2 align-items-center">
        <h3 className='text-light'>MovieApp</h3>
        <Search searchQuery={searchQuery} onSearchChange={onSearchChange} handleSearchSubmit={handleSearchSubmit} />
      </div>
    </div>
  );
}

Header.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  handleSearchSubmit: PropTypes.func.isRequired,
};

export default Header;
