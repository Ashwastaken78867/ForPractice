import React from 'react';
import logo from '../assets/header.png';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-4 shadow-sm">
      <a className="navbar-brand" href="#">
        <img
          src={logo}
          alt="Campus Tech Logo"
          height="40"
          className="d-inline-block align-text-top"
        />
      </a>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
        <ul className="navbar-nav align-items-center">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle text-dark"
              href="#"
              id="solutionsDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Solutions
            </a>
            <ul className="dropdown-menu" aria-labelledby="solutionsDropdown">
              <li><a className="dropdown-item" href="#">Enterprise</a></li>
              <li><a className="dropdown-item" href="#">Education</a></li>
            </ul>
          </li>

          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle text-dark"
              href="#"
              id="resourcesDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Resources
            </a>
            <ul className="dropdown-menu" aria-labelledby="resourcesDropdown">
              <li><a className="dropdown-item" href="#">Blog</a></li>
              <li><a className="dropdown-item" href="#">Docs</a></li>
            </ul>
          </li>

          <li className="nav-item">
            <a className="nav-link text-dark" href="#">About Us</a>
          </li>

          <li className="nav-item">
            <a className="nav-link text-dark" href="#">Contact</a>
          </li>

          <li className="nav-item ms-2">
            <a className="btn btn-outline-dark rounded-pill px-3" href="#">
              Login
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
