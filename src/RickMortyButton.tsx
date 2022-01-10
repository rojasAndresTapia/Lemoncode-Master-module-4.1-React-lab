import React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { RickMortyButtonStyles } from './RickMortyButtonStyles';

export const RickMortyButton = () => {
  return (
    <div css={RickMortyButtonStyles}>
      <Link to='/rickMorty'>
        <Button variant='contained'>Go to Rick and Morty</Button>
      </Link>
    </div>
  );
};
