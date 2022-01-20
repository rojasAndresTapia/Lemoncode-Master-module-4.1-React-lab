import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { Card, CardContent, CardMedia } from '@mui/material';
import { rickMortyStyles } from './rickMortyStyles';
import { RedirectButton } from './redirectButton';

interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
  url: string;
}

export const CharacterPage: React.FC = () => {
  const { id } = useParams();
  const api = `https://rickandmortyapi.com/api/character/${id}`;

  const history = useHistory();

  const [character, setCharacter] = React.useState<Character>({
    id: 0,
    name: "",
    status: "",
    species: "",
    gender: "",
    image: "",
    url: "",
  
  });

  React.useEffect(() => {
    fetch(api)
      .then((response) => response.json())
      .then((json) => setCharacter(json));
  }, []);

  const handleClick = () => {
    history.push('/rickMorty');
  }
  return (
    <>
      <Typography variant='h2' gutterBottom component='div'>
        Character page
      </Typography>
      <h3>User Id: {id}</h3>
      <RedirectButton
      onClick={handleClick}
      message='Back to Rick and Morty page'
      />
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
