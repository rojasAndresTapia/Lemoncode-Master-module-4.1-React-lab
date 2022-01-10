import React from 'react';
import { rickMortyStyles } from './rickMortyStyles';
import { Pagination } from './Pagination';
import { generatePath, Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import { Button, CardActions, CardContent, CardMedia } from '@mui/material';
import { Searcher } from './Searcher';

interface Character {
  id: number;
  name: string;
  status: string;
  image: string;
}

export const RickMortyPage: React.FC = () => {
  const [pageNumber, setPageNumber] = React.useState(1);
  const [value, setValue] = React.useState('');
  const [characters, setCharacters] = React.useState<Character[]>([]);
  const api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${value}`;

  React.useEffect(() => {
    fetch(api)
      .then((response) => response.json())
      .then((json) => setCharacters(json.results));
  }, [api]);

  // Handler functions
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setValue(event.target.value);
  };

  const handleButtonClick = () => {
    fetch(api)
      .then((response) => response.json())
      .then((json) => setCharacters(json.results));
  };

  return (
    <>
      <Typography variant='h2' gutterBottom component='div'>
        Rick and Morty page
      </Typography>
      <div>
        <Link to='/list'>Back to list page</Link>
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