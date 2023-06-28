import React from 'react';
import PropTypes from 'prop-types';
import { FaArrowLeft, FaSearch } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Header.css';
import logoImg from '../images/logo.png';

const Header = ({ handleSearch }) => {
  const location = useLocation();

  return (
    <>
      <header>
        <nav className="header-nav">
          <ul className="navlinks">
            <li className="navlink1">
              {location.pathname !== '/' && (
                <Link to="/">
                  <FaArrowLeft className="Fa-home" />
                </Link>
              )}
            </li>
            <li className="navlink2">
              <img
                className="logo-img"
                alt="logo"
                src={logoImg}
              />
            </li>
            <li className="navlink3">MTFD</li>
            <li className="navlink4">
              {location.pathname !== '/' && (
                <FaSearch className="Fa-search" onClick={handleSearch} />
              )}
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

Header.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};

export default Header;
