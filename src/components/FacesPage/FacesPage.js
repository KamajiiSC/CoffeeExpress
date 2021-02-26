import React from 'react';
import "./FacesPage.css";
import john from '../../resources/john.jpg';
import diane from '../../resources/diane.jpg';
import brett from '../../resources/brett.jpg';

const FacesPage = () => (
  <main id="faces">
    <h1 className="faces-title">Meet the team</h1>

    <section className="team">
      <div className="team-card">
        <img className="team-img" src={john} alt=""/>
        <h3 className="team-name">John</h3>
        <p className="team-desc"></p>
      </div>
      <div className="team-card">
        <img className="team-img" src={diane} alt=""/>
        <h3 className="team-name">Diane</h3>
        <p className="team-desc"></p>
      </div>
      <div className="team-card">
        <img className="team-img" src={brett} alt=""/>
        <h3 className="team-name">Brett</h3>
        <p className="team-desc"></p>
      </div>
    </section>
  </main>
);

export default FacesPage;