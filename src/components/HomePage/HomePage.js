import React from 'react';
import home from '../../resources/hang-out.svg';
import { NavLink } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => (
  <main id="home">
    <section className="left-section-home">
      <h1 className="home-title">Café &<br />Bakery</h1>
      <p className="home-slogan">Your routine is our routine</p>
      <NavLink to="/contact" className="home-btn">FIND US</NavLink>
    </section>
    
    <section className="right-section-home">
      <img src={home} alt="Friends around table in park"/>    
    </section>
  </main>
);

export default HomePage;