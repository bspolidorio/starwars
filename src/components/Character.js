import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { Link } from 'react-router-dom';

const CHARACTER_QUERY = gql`
  query getPersonById($id: ID) {
    person(id: $id) {
      id
      name
      gender
      birthYear
      eyeColor
      hairColor
      homeworld {
        name
      }
      height
      skinColor
      filmConnection {
        films {
          id
          title
        }
      }
    }
  }
`;

export default function Character({ match }) {
  let { id } = match.params;
  const { loading, data } = useQuery(CHARACTER_QUERY, { variables: { id } });
  if (loading) return <p>Loading...</p>;

  const {
    name,
    gender,
    birthYear,
    eyeColor,
    hairColor,
    homeworld: { name: homeworld },
    height,
    skinColor
  } = data.person;

  return (
    <div>
      <div>
        <p>Name: {name}</p>
        <p>Gender: {gender}</p>
        <p>Birth year: {birthYear}</p>
        <p>Eye color: {eyeColor}</p>
        <p>Hair color: {hairColor}</p>
        <p>Homeworld: {homeworld}</p>
        <p>Height: {height}</p>
        <p>Skin color: {skinColor}</p>
        <p>Films:</p>
        <div>
          {data.person.filmConnection.films.map(({ title, id }) => (
            <Link to={`/film/${id}`} key={id}>
              {title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
