import React from 'react';
import './EventsPage.css';
import specialEvent from '../../resources/special-event.svg';

const EventsPage = () => (
  <main id="event">
    <img className="event-img" src={specialEvent} alt=""/>

    <section className="events">
      <ul className='event-list'>
        <li>
          <div className="event-post">
            <h3 className="event-title">Slam Poetry</h3>
            <p className="event-desc">Slam poetry night hosted by local university poetry club!</p>
            <p className="event-date">3/25/2021</p>
            <a href="#" className="link">Link</a>
          </div>
        </li>
      </ul>
      
    </section>
  </main>
);

export default EventsPage