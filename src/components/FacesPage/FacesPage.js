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
        <div className="team-content">
          <h3 className="team-name">John</h3>
          <p className="team-desc">A young passionate barista who stays cool under any pressure, John is a pillar for the team.</p>
          <p className="fav-drink">Favorite drink: Venti decaf mocha, triple shot</p>
        </div>
      </div>

      <div className="team-card">
        <img className="team-img" src={diane} alt=""/>
        <div className="team-content">
          <h3 className="team-name">Diane</h3>
          <p className="team-desc">Out-going and organized, Diane stays 3 steps ahead of any order.</p>
          <p className="fav-drink">Favorite drink: Grande cafe espresso frappucino, with whip</p>
        </div>
      </div>

      <div className="team-card">
        <img className="team-img" src={brett} alt=""/>
        <div className="team-content">
          <h3 className="team-name">Brett</h3>
          <p className="team-desc">A warm smile and an impressive beard to match, Brett makes sure anybody who walks in those doors finds what they're looking for.</p>
          <p className="fav-drink">Favorite drink: Tall decaf black coffee</p>
        </div>
      </div>
    </section>
  </main>
);

export default FacesPage;