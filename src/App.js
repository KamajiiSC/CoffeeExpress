import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import Header from './components/Header/Header';
import EventsPage from './components/EventsPage/EventsPage';
import AboutPage from './components/AboutPage/AboutPage';
import FacesPage from './components/FacesPage/FacesPage';
import ContactPage from './components/ContactPage/ContactPage';

function App() {
  return (
    <div className="App">
      
      <Router>
        <Header />
        <Switch>
          <Route path="/contact">
            <ContactPage />
          </Route>
          <Route path="/faces">
            <FacesPage />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/events">
            <EventsPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
