import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { Link } from 'react-router-dom';

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

export default function Characters() {
  const { loading, data } = useQuery(CHARACTERS_QUERY);
  if (loading) return <p>Loading...</p>;
  return (
    <div>
      <p>Characters</p>
      <div>
        {data.allPeople.edges.map(({ node: { id, name } }) => (
          <Link to={`/character/${id}`} key={id}>
            {name}
          </Link>
        ))}
      </div>
    </div>
  );
}
