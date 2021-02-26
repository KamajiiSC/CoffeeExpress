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
            <h3 className="event-title event-el" >Slam Poetry</h3>
            <p className="event-desc event-el">Slam poetry night hosted by local university poetry club!</p>
            <p className="event-date event-el">3/25/2021</p>
            <ul className="link-list">
              <li><a href="#" className="link event-el">Link</a></li>
              <li><a href="#" className="link event-el">Link</a></li>
              <li><a href="#" className="link event-el">Link</a></li>
              <li><a href="#" className="link event-el">Link</a></li>
            </ul>
            
          </div>
        </li>
        <li>
          <div className="event-post">
          <h3 className="event-title event-el" >At home barista training</h3>
            <p className="event-desc event-el">Have you ever wanted to learn how the pro's make the coffee you enjoy everyday? Find out from the comfort of your computer at home!
            </p>
            <p className="event-date event-el">4/01/2021</p>
            <ul className="link-list">
              <li><a href="#" className="link event-el">Link</a></li>
              <li><a href="#" className="link event-el">Link</a></li>
              <li><a href="#" className="link event-el">Link</a></li>
              <li><a href="#" className="link event-el">Link</a></li>
            </ul>
          </div>
        </li>
        <li>
          <div className="event-post">
            <h3 className="event-title event-el" >Around the cup in 90 minutes</h3>
            <p className="event-desc event-el">
              If you've ever wanted to branch out and try some
              new roasts, but weren't sure where to start make 
              sure to be here the 26th! With any purchase of a 
              sandwich and drink participate in a coffee tasting 
              that will broaden your horizons without stretching
              your wallet.
            </p>
            <p className="event-date event-el">4/26/2021</p>
            <ul className="link-list">
              <li><a href="#" className="link event-el">Link</a></li>
              <li><a href="#" className="link event-el">Link</a></li>
              <li><a href="#" className="link event-el">Link</a></li>
              <li><a href="#" className="link event-el">Link</a></li>
            </ul>
          </div>
        </li>
      </ul>
      
    </section>
  </main>
);

export default EventsPage