import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { Link } from 'react-router-dom';

const FILMS_QUERY = gql`
  query getFilmeById($id: ID) {
    film(id: $id) {
      title
      openingCrawl
      releaseDate
      director
      characterConnection {
        characters {
          id
          name
        }
      }
    }
  }
`;

export default function Films({ match }) {
  let { id } = match.params;
  const { loading, data } = useQuery(FILMS_QUERY, { variables: { id } });
  if (loading) return <p>Loading...</p>;

  const { title, openingCrawl, releaseDate, director } = data.film;
  return (
    <div>
      <div>
        <p>Film: {title}</p>
        <p>{openingCrawl}</p>
        <p>Release Date: {releaseDate}</p>
        <p>Director: {director}</p>
        <div>
          {data.film.characterConnection.characters.map(({ name, id }) => (
            <Link to={`/character/${id}`} key={id}>
              {name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
