import React from 'react';
import "./Header.css";
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <NavLink className="shop-logo" to="/">
      <h2 className="shop-name">
        Coffee<span className="express">Express</span>
      </h2>
    </NavLink>
    
    <nav>
      <ul>
        <li><NavLink className="nav-el" exact activeClassName="nav-active" to="/">Home</NavLink></li>
        <li><NavLink className="nav-el" activeClassName="nav-active" to="/events" >Events</NavLink></li>
        <li><NavLink className="nav-el" activeClassName="nav-active" to="/about">About</NavLink></li>
        <li><NavLink className="nav-el" activeClassName="nav-active" to="/faces">Faces</NavLink></li>
        <li><NavLink className="nav-el" activeClassName="nav-active" to="/contact">Contact</NavLink></li>
      </ul>
    </nav>
  </header>
);

export default Header;