import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { Link } from 'react-router-dom';
import {
  GlobalStyle,
  FilmWrapper,
  FilmHeader,
  FilmCover,
  FilmDetails,
  FilmCharConnections,
  Avatar
} from '../styles';
import logo from '../img/logo-sw.png';
import cover from '../img/anewhope.jpg';
import avatar from '../img/icn-avatar-big.png';

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

function enDateToFilmsDate(date) {
  return date
    .split('-', 3)
    .reverse()
    .join('/');
}

export default function Films({ match }) {
  let { id } = match.params;
  const { loading, data } = useQuery(FILMS_QUERY, { variables: { id } });
  if (loading) return <p>Loading...</p>;

  const { title, openingCrawl, releaseDate, director } = data.film;

  return (
    <React.Fragment>
      <GlobalStyle />
      <FilmWrapper>
        <FilmHeader>
          <Link to="/">
            <img src={logo} alt="logo"></img>
          </Link>
          <p>characters</p>
        </FilmHeader>
        <FilmCover>
          <img src={cover} alt="avatar"></img>
        </FilmCover>
        <FilmDetails>
          <p>
            Film <br />
            <h1>{title}</h1>
          </p>
          <h2>{openingCrawl}</h2>
          <div>
            <p>
              {enDateToFilmsDate(releaseDate)}
              <br />
              <span>Release Date </span>
            </p>
            <p>
              {director}
              <br />
              <span>Director</span>
            </p>
          </div>
        </FilmDetails>
        <FilmCharConnections>
          {data.film.characterConnection.characters.map(({ name, id }) => (
            <Link to={`/character/${id}`} key={id}>
              <Avatar>
                <img src={avatar} alt="avatar"></img>
                <span>{name}</span>
              </Avatar>
            </Link>
          ))}
        </FilmCharConnections>
      </FilmWrapper>
    </React.Fragment>
  );
}
