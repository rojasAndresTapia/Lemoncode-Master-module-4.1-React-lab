import React from 'react';
import { Link, generatePath, useHistory} from 'react-router-dom';
import { Searcher } from './searcher';
import { RickMortyButton } from './rickMortyButton';
import { ContainerButtonStyles } from './rickMortyButtonStyles';
import { companyCardStyles, companyListStyles, containerHeaderStyles} from './listStyles';
import Typography from '@mui/material/Typography';
import { Button, Card, CardActions, CardContent, CardMedia } from '@mui/material';

interface MemberEntity {
  id: string;
  login: string;
  avatar_url: string;
}

export const ListPage: React.FC = () => {

  const history = useHistory()
  

  // States
  const [company, setCompany] = React.useState({
    name: 'Apple',
    url: `https://api.github.com/orgs/Apple/members`,
  });
  const [members, setMembers] = React.useState<MemberEntity[]>([]);

  React.useEffect(() => {
    fetch(`${company.url}`)
      .then((response) => response.json())
      .then((json) => setMembers(json))
      .catch((error) => {
        alert('No list members');
      })
      
  }, [members]);

  // Handler functions
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCompany({
      name: event.target.value,
      url: `https://api.github.com/orgs/${event.target.value}/members`,
    });
  };

  const handleButtonClick = () => {
    fetch(`${company.url}`)
      .then((response) => response.json())
      .then((json) => {
        if (Array.isArray(json)) {
          setMembers(json);
        } else {
          setMembers([]);
          alert('Try again with a new company');
        }
      });
  };

  return (
    <>
      <div css={containerHeaderStyles}>
        <Typography variant='h1'>Member's company list</Typography>
        <Typography variant='h5'>Write the name of the company to get the list of members</Typography>
        <div css={ContainerButtonStyles}>
        <Searcher
          label='company'
          data={company.name}
          onChange={handleInputChange}
          onClick={handleButtonClick}
        />
        <RickMortyButton />

        </div>
        
      </div>
     
      <div css={companyListStyles}>
     
          {members.map((member, index) => (
            <Card key={index} sx={{ maxWidth: 345, marginBottom: 5 }} css={companyCardStyles}>
              <CardMedia component='img' image={member.avatar_url} />
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  {member.login}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  {member.id}
                </Typography>
              </CardContent>
              <CardActions>
              <Link to={generatePath('/detail/:login', { login: member.login })}>
                  <Button variant='contained' size='small'>
                    Details
                  </Button>
                </Link>
              </CardActions>
            </Card>
          ))}
        </div>
    </>
  );
};
function createBrowserHistory(arg0: { forceRefresh: boolean; }) {
  throw new Error('Function not implemented.');
}

function useNavigate() {
  throw new Error('Function not implemented.');
}

