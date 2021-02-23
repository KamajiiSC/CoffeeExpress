import React from 'react';
import './AboutPage.css';
import together from '../../resources/together.svg';

const AboutPage = () => (
  <main>
    <section className="top-section-about">
      <img src={together} alt=""/>

      <section className="quotes">
        <p className="quote">"Wanna grab coffee?"</p>
        <p className="quote">"Can you grab coffee for the office?"</p>
        <p className="quote">"Don't talk to me til' I've had my coffee"</p>
      </section>
    </section>
    
    <section className="bottom-section-about">
      <h1 className="about-title">About Us</h1>
      <p className="about-desc">Coffee can be an essential part of your daily routine, or a backdrop
      for an important first date. Since 2008 Coffee Express has
      provided the most consistent cup for any situation. Our secret? 
      Top level craftsmanship and our in-house blend, 
      roasted to perfection every time.
      </p>
    </section>

  </main>
);

export default AboutPage;
