// rafce
import React from 'react'

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand " href="/">YoussefShop</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
       
            <li className="nav-item">
              <a className="nav-link" href="#">Cart</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Sign In</a>
            </li>
          </ul>

        </div>
      </nav>
        </header>
    )
}

export default Header

