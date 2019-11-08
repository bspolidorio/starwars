import React, { Component, Fragment } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import CharacterItem from './CharacterItem';

const CHARACTERS_QUERY = gql`
  query getPeople {
    allPeople {
      edges {
        node {
          name
          id
        }
      }
    }
  }
`;

export default class Characters extends Component {
  render() {
    return (
      <Fragment>
        <p>Characters</p>
        <Query query={CHARACTERS_QUERY}>
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;

            return (
              <Fragment>
                {data.allPeople.edges.map(({ node: { id, name } }) => (
                  <CharacterItem key={id} id={id} name={name} />
                ))}
              </Fragment>
            );
          }}
        </Query>
      </Fragment>
    );
  }
}
