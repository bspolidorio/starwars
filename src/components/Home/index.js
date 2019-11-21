import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { Link } from 'react-router-dom';
import * as S from './styles';
import Loading from '../Loading';
import logo from '../../assets/img/logo-sw.png';
import avatar from '../../assets/img/icn-avatar-big.png';

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

export default function Home() {
  const { loading, data } = useQuery(CHARACTERS_QUERY);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [peopleEdges, setPeopleEdges] = React.useState([]);
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  React.useEffect(() => {
    if (data) {
      const results = data.allPeople.edges.filter(({ node: { name } }) =>
        name.toLowerCase().includes(searchTerm)
      );
      setPeopleEdges(results);
    }
  }, [searchTerm, data]);

  if (loading) return <Loading />;

  return (
    <React.Fragment>
      <S.GlobalStyle />
      <S.HomeWrapper>
        <S.HomeHeader>
          <Link to="/">
            <img src={logo} alt=""></img>
          </Link>
          <p>characters</p>
          <input
            type="text"
            placeholder="Find your character"
            value={searchTerm}
            onChange={handleChange}
          />
        </S.HomeHeader>
        <S.CharList>
          {peopleEdges.map(({ node: { id, name } }) => (
            <S.Avatar>
              <Link to={`/character/${id}`} key={id}>
                <img src={avatar} alt="avatar"></img>
                <span>{name}</span>
              </Link>
            </S.Avatar>
          ))}
        </S.CharList>
      </S.HomeWrapper>
    </React.Fragment>
  );
}
