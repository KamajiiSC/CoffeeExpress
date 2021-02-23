import React from 'react';
import './ContactPage.css';
import map from '../../resources/map.svg';

const ContactPage = () => (
  <main id="contact">
    <img src={map} alt="cartoon image of map"/>

    <section className="contact-info">
      <h1 className="contact-title">How to find us</h1>
      <section className="contact-container">
        <h3 className="contact-shop">Coffee Express</h3>
        <p className="info">4462  Swick Hill Street Charlotte NC</p>
        <p className="info">(980) 343-8243</p>
        <p className="info">CoffeeExpress@gmail.com</p>
        <p className="info">M-F  7:00AM - 9pm S&S 9:00AM - 8PM</p>
      </section>
    </section>
  </main>
);

export default ContactPage;