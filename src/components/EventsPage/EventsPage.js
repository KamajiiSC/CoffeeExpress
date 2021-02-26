import React from 'react';
import './EventsPage.css';
import specialEvent from '../../resources/special-event.svg';
import Events from './Events';
import EventCard from '../EventCard/EventCard';

const EventsPage = () => (
  <main id="event">
    <img className="event-img" src={specialEvent} alt=""/>

    <section className="events">
      <ul className='event-list'>
        <li>
          <EventCard {...Events[0]}/>
        </li>
        <li>
          <EventCard {...Events[1]}/>
        </li>
        <li>
          <EventCard {...Events[2]}/>
        </li>
      </ul>
      
    </section>
  </main>
);

export default EventsPage