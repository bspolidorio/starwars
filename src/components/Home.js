import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { Link } from 'react-router-dom';
import {
  GlobalStyle,
  HomeWrapper,
  HomeHeader,
  CharList,
  Avatar
} from '../styles';
import logo from '../img/logo-sw.png';
import avatar from '../img/icn-avatar-big.png';

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

  if (loading) return <p>Loading...</p>;

  return (
    <React.Fragment>
      <GlobalStyle />
      <HomeWrapper>
        <HomeHeader>
          <Link to="/">
            <img src={logo} alt="logo"></img>
          </Link>
          <p>characters</p>
          <input
            type="text"
            placeholder="Find your character"
            value={searchTerm}
            onChange={handleChange}
          />
        </HomeHeader>
        <CharList>
          {peopleEdges.map(({ node: { id, name } }) => (
            <Link to={`/character/${id}`} key={id}>
              <Avatar>
                <img src={avatar} alt="avatar"></img>
                <span>{name}</span>
              </Avatar>
            </Link>
          ))}
        </CharList>
      </HomeWrapper>
    </React.Fragment>
  );
}
