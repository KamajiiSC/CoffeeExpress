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
    
  </main>
);

export default AboutPage;
