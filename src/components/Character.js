import React, { Component, Fragment } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';

const CHARACTER_QUERY = gql`
  query getPersonById($id: ID) {
    person(id: $id) {
      id
      name
    }
  }
`;

export default class Character extends Component {
  render() {
    let { id } = this.props.match.params;
    return (
      <Fragment>
        <Query query={CHARACTER_QUERY} variables={{ id }}>
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;

            const { name } = data.person;

            return (
              <Fragment>
                <p>Name: {name}</p>
                <Link to="/">Back</Link>
              </Fragment>
            );
          }}
        </Query>
      </Fragment>
    );
  }
}
