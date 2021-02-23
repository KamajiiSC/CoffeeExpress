import React from 'react';
import "./Header.css";
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h2 className="shop-name">Coffee<span className="express">Express</span></h2>
    
    <nav>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/events" >Events</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/faces">Faces</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
    </nav>
  </header>
);

export default Header;