// components/Navbar.js
import React from 'react';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        <img src="logo.png" alt="MITWPU Logo" width="150" />
      </a>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="#home">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#upcomingEvents">Upcoming Events</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#clubs">Clubs</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">Contact Us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
