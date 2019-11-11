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
    <div>
      <p>Characters</p>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
      <ul>
        {peopleEdges.map(({ node: { id, name } }) => (
          <Link to={`/character/${id}`} key={id}>
            {name}
          </Link>
        ))}
      </ul>
    </div>
  );
}
