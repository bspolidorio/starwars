import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Characters from './components/Characters';
import Character from './components/Character';

const client = new ApolloClient({
  uri: 'https://rxrossi-swapi.herokuapp.com'
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <h2>My first Apollo app</h2>
        </div>
        <Route exact path="/" component={Characters} />
        <Route exact path="/character/:id" component={Character} />
      </Router>
    </ApolloProvider>
  );
}
