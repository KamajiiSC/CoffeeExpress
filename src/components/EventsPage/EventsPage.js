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
        {Events.map(event => 
          <li key={event.id}> 
            <EventCard {...event}/> 
          </li>)
        }
      </ul>
      
    </section>
  </main>
);

export default EventsPage