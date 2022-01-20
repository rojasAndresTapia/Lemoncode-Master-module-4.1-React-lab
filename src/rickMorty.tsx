import React from 'react';
import { rickMortyStyles } from './rickMortyStyles';
import { Pagination } from './pagination';
import { generatePath, Link, useHistory } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import { Button, CardActions, CardContent, CardMedia } from '@mui/material';
import { Searcher } from './searcher';
import { RedirectButton } from './redirectButton';

interface Character {
  id: number;
  name: string;
  status: string;
  image: string;
}

export const RickMortyPage: React.FC = () => {
  const history = useHistory();
  const [pageNumber, setPageNumber] = React.useState(1);
  const [value, setValue] = React.useState('');
  const [characters, setCharacters] = React.useState<Character[]>([]);

  React.useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${value}`)
      .then((response) => response.json())
      .then((json) => setCharacters(json.results));
  }, []);

  // Handler functions
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setValue(event.target.value);
  };

  const handleClick = () => {
    history.push('/list');
  }

  const handleButtonClick = () => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${value}`)
      .then((response) => response.json())
      .then((json) => {
        if (Array.isArray(json)) {
          setCharacters(json);
        } else {
          alert('Try again with a new character');
          setValue("");
        }
      });
    };
  return (
    <>
      <Typography variant='h2' gutterBottom component='div'>
        Rick and Morty page
      </Typography>
      <div>
      <RedirectButton
      onClick={handleClick}
      message='Back to List page'
      />
        <Searcher
          label='Search character'
          data={value}
          onChange={handleInputChange}
          onClick={handleButtonClick}
        />
        <div css={rickMortyStyles}>
          {characters.map((character, index) => (
            <Card key={index} sx={{ maxWidth: 345, marginBottom: 5 }}>
              <CardMedia component='img' image={character.image} />
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  {character.name}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  {character.status}
                </Typography>
              </CardContent>
              <CardActions>
                <Link
                  to={generatePath('/characterPage/:id', { id: character.id})}
                >
                  <Button variant='contained' size='small'>Details</Button>
                </Link>
              </CardActions>
            </Card>
          ))}
        </div>
        <Pagination
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
        ></Pagination>
      </div>
    </>
  );
};
