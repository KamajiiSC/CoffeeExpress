import React from 'react';
import "./Header.css";

const Header = () => (
  <header>
    <h2 className="shop-name">Coffee<span className="express">Express</span></h2>
    
    <nav>
      <ul>
        <li><a href="">Home</a></li>
        <li><a href="">Events</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Faces</a></li>
        <li><a href="">Contact</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;