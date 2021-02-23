import React from 'react';
import home from '../../resources/home-page-vector.svg';
import { NavLink } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => (
  <main id="home">
    <section className="left-section">
      <h1 className="home-title">Café & <br /> Bakery</h1>
      <p className="home-logo">Your routine is our routine</p>
      <NavLink to="/contact">FIND US</NavLink>
    </section>
    
    <section className="right-section">
      <img src={home} alt="Friends around table in park"/>    
    </section>
  </main>
);

export default HomePage;