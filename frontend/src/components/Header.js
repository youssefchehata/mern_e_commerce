// rafce
import React from 'react';
import { Nav } from 'react-bootstrap';
import { BrowserRouter, Route, Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <Link className='navbar-brand ' to='/'>
          Youssef_Shop
        </Link>
    
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item'>
              <Link className='nav-link ml-auto' to='/Cart'> <i className='fas fa-shopping-cart'></i> Cart </Link>
            </li>
            <li className='nav-item'>
              <a className='nav-link ml-auto' href='/Profile'> <i className='fas fa-user'></i> Sign In </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
