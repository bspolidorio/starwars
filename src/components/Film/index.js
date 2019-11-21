import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { Link } from 'react-router-dom';
import * as S from './styles';
import Loading from '../Loading';
import logo from '../../assets/img/logo-sw.png';
import cover from '../../assets/img/anewhope.jpg';
import avatar from '../../assets/img/icn-avatar-big.png';

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
  if (loading) return <Loading />;

  const { title, openingCrawl, releaseDate, director } = data.film;

  return (
    <React.Fragment>
      <S.GlobalStyle />
      <S.FilmWrapper>
        <S.FilmHeader>
          <Link to="/">
            <img src={logo} alt=""></img>
          </Link>
          <p>characters</p>
        </S.FilmHeader>
        <S.FilmDetailsWrapper>
          <S.FilmCover>
            <img src={cover} alt=""></img>
          </S.FilmCover>
          <S.FilmDetails>
            <dl>
              <div>
                <dt>Film</dt>
                <dd>{title}</dd>
              </div>
            </dl>
            <p>{openingCrawl}</p>
            <div>
              <dl>
                <div>
                  <dt>Release Date</dt>
                  <dd>{enDateToFilmsDate(releaseDate)}</dd>
                </div>
                <div>
                  <dt>Director</dt>
                  <dd>{director}</dd>
                </div>
              </dl>
            </div>
          </S.FilmDetails>
        </S.FilmDetailsWrapper>
        <S.FilmCharConnections>
          {data.film.characterConnection.characters.map(({ name, id }) => (
            <Link to={`/character/${id}`} key={id}>
              <S.Avatar>
                <img src={avatar} alt="avatar"></img>
                <span>{name}</span>
              </S.Avatar>
            </Link>
          ))}
        </S.FilmCharConnections>
      </S.FilmWrapper>
    </React.Fragment>
  );
}
