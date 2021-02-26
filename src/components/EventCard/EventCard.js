import React from 'react';
import './EventCard.css';

const EventCard = () => (
  <div className="event-post">
    <h3 className="event-title event-el" >hi</h3>
    <p className="event-desc event-el">Slam poetry night hosted by local university poetry club!</p>
    <p className="event-date event-el">3/25/2021</p>
    <ul className="link-list">
      <li><a href="#" className="link event-el">Link</a></li>
      <li><a href="#" className="link event-el">Link</a></li>
      <li><a href="#" className="link event-el">Link</a></li>
      <li><a href="#" className="link event-el">Link</a></li>
    </ul>     
  </div>
);

export default EventCard