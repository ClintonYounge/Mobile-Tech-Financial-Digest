import React from 'react';
import PropTypes from 'prop-types';
import { FaHome, FaSearch } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const Header = ({ handleSearch }) => {
  const location = useLocation();

  return (
    <>
      {location.pathname !== '/' && (
        <Link to="/">
          <FaHome />
        </Link>
      )}
      {location.pathname !== '/' && (
        <FaSearch onClick={handleSearch} />
      )}
      <header>
        <nav />
      </header>
    </>
  );
};

Header.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};

export default Header;
