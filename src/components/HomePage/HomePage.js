import React from 'react';
import { NavLink } from 'react-router-dom';

const HomePage = () => (
  <main className="home">
    <section className="left-section">
      <h1 className="home-title">Café & <br /> Bakery</h1>
      <p className="home-logo">Your routine is our routine</p>
      <NavLink to="/contact">FIND US</NavLink>
    </section>
    
    <section className="right-section">
      
    </section>
  </main>
);

export default HomePage;