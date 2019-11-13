import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Character from './components/Character';
import Film from './components/Film';

export default function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/character/:id" component={Character} />
      <Route exact path="/film/:id" component={Film} />
    </Router>
  );
}
