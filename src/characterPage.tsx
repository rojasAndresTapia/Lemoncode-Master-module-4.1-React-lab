import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { Card, CardContent, CardMedia } from '@mui/material';
import { rickMortyStyles } from './rickMortyStyles';

interface Character {
  id: number;
  name: string;
  status: string;
  image: string;
  url: string;
}

export const CharacterPage: React.FC = () => {
  const { id } = useParams();
  const api = `https://rickandmortyapi.com/api/character/${id}`;

  const [character, setCharacter] = React.useState<Character[]>([]);

  React.useEffect(() => {
    fetch(api)
      .then((response) => response.json())
      .then((json) => setCharacter(json));
  }, []);
  return (
    <>
      <Typography variant='h2' gutterBottom component='div'>
        Character page
      </Typography>
      <h3>User Id: {id}</h3>
      <Link to='/rickMorty'>Back to Rick and Morty page</Link>
      <div css={rickMortyStyles}>
        <Card sx={{ maxWidth: 345, marginBottom: 5 }}>
          <CardMedia component='img' image={character.image} />
          <CardContent>
            <Typography gutterBottom variant='h3' component='div'>
              {character.name}
            </Typography>
            <Typography variant='subtitle1' gutterBottom component='div'>
              {character.species}
            </Typography>
            <Typography variant='subtitle1' gutterBottom component='div'>
              {character.gender}
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              {character.status}
            </Typography>
          </CardContent>
        </Card>
      </div>
    </>
  );
};
