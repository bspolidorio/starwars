import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { Link } from 'react-router-dom';
import {
  GlobalStyle,
  CharWrapper,
  CharHeader,
  CharAvatar,
  CharDetailsWrapper,
  CharDetails,
  CharFilms
} from '../styles';
import logo from '../img/logo-sw.png';
import avatar from '../img/icn-avatar-big.png';

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
          releaseDate
        }
      }
    }
  }
`;

function getYear(date) {
  return date.split('-', 1);
}

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
    <React.Fragment>
      <GlobalStyle />
      <CharWrapper>
        <CharHeader>
          <Link to="/">
            <img src={logo} alt="logo"></img>
          </Link>
          <p>characters</p>
        </CharHeader>
        <CharAvatar>
          <img src={avatar} alt="avatar"></img>
          <span>{name}</span>
        </CharAvatar>
        <CharDetailsWrapper>
          <p>Details</p>
          <CharDetails>
            <p>
              {gender} <br /> <span>Gender</span>
            </p>
            <p>
              {birthYear} <br /> <span>Birth year</span>
            </p>
            <p>
              {eyeColor} <br /> <span>Eye color</span>
            </p>
            <p>
              {hairColor} <br /> <span>Hair color</span>
            </p>
            <p>
              {homeworld} <br /> <span>Homeworld</span>
            </p>
            <p>
              {height} <br /> <span>Height</span>
            </p>
            <p>
              {skinColor} <br /> <span>Skin color</span>
            </p>
          </CharDetails>
          <CharFilms>
            <p>Films</p>
            {data.person.filmConnection.films.map(
              ({ title, id, releaseDate }) => (
                <li>
                  <Link to={`/film/${id}`} key={id}>
                    {title} ({getYear(releaseDate)})
                  </Link>
                </li>
              )
            )}
          </CharFilms>
        </CharDetailsWrapper>
      </CharWrapper>
    </React.Fragment>
  );
}
