import React from 'react';
import './EventCard.css';

const EventCard = (props) => (
  <div className="event-post">
    <h3 className="event-title event-el" >{props.title}</h3>
    <p className="event-desc event-el">{props.description}</p>
    <p className="event-date event-el">{props.description}</p>
    <ul className="link-list">
      <li><a href="#" className="link event-el">Link</a></li>
      <li><a href="#" className="link event-el">Link</a></li>
      <li><a href="#" className="link event-el">Link</a></li>
      <li><a href="#" className="link event-el">Link</a></li>
    </ul>     
  </div>
);

export default EventCard