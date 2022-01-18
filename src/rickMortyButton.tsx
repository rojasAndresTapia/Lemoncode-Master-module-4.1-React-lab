import React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { RickMortyButtonStyles } from './rickMortyButtonStyles';

export const RickMortyButton = () => {
  return (
    <div css={RickMortyButtonStyles}>
      <Link to='/rickMorty'>
        <Button variant='contained'>Go to Rick and Morty</Button>
      </Link>
    </div>
  );
};
