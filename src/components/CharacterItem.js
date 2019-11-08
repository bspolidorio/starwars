import React from 'react';
import { Link } from 'react-router-dom';

export default function CharacterItem({ id, name }) {
  return <Link to={`/character/${id}`}>{name}</Link>;
}
