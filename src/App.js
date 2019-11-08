import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Characters from './components/Characters';
import Character from './components/Character';
import Film from './components/Film';
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <div>
        <Link to="/">Star Wars</Link>
      </div>
      <Route exact path="/" component={Characters} />
      <Route exact path="/character/:id" component={Character} />
      <Route exact path="/film/:id" component={Film} />
    </Router>
  );
}
