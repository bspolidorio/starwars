import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { Link } from 'react-router-dom';
import * as S from './styles';
import Loading from '../Loading';
import logo from '../../assets/img/logo-sw.png';
import avatar from '../../assets/img/icn-avatar-big.png';

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
  if (loading) return <Loading />;

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
      <S.GlobalStyle />
      <S.CharWrapper>
        <S.CharHeader>
          <Link to="/">
            <img src={logo} alt=""></img>
          </Link>
          <p>characters</p>
        </S.CharHeader>
        <S.CharDetailsWrapper>
          <S.CharAvatar>
            <img src={avatar} alt=""></img>
            <span>{name}</span>
          </S.CharAvatar>
          <S.DetailsWrapper>
            <S.CharDetails>
              <p>Details</p>
              <dl>
                <div>
                  <dt>Gender</dt>
                  <dd>{gender}</dd>
                </div>
                <div>
                  <dt>Birth year</dt>
                  <dd>{birthYear}</dd>
                </div>
                <div>
                  <dt>Eye color</dt>
                  <dd>{eyeColor}</dd>
                </div>
                <div>
                  <dt>Hair color</dt>
                  <dd>{hairColor}</dd>
                </div>
                <div>
                  <dt>Homeworld</dt>
                  <dd>{homeworld}</dd>
                </div>
                <div>
                  <dt>Height</dt>
                  <dd>{height}</dd>
                </div>
                <div>
                  <dt>Skin color</dt>
                  <dd>{skinColor}</dd>
                </div>
              </dl>
            </S.CharDetails>
            <S.CharFilms>
              <p>Films</p>
              {data.person.filmConnection.films.map(
                ({ title, id, releaseDate }) => (
                  <li key={id}>
                    <Link to={`/film/${id}`}>
                      {title} ({getYear(releaseDate)})
                    </Link>
                  </li>
                )
              )}
            </S.CharFilms>
          </S.DetailsWrapper>
        </S.CharDetailsWrapper>
      </S.CharWrapper>
    </React.Fragment>
  );
}
