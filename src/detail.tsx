import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { RedirectButton } from './redirectButton';
import { companyListStyles } from './listStyles';
import { Card, CardContent, CardMedia } from '@mui/material';

interface MemberEntity {
  id: string;
  login: string;
  avatar_url: string;
  html_url: string;
}

export const DetailPage: React.FC = () => {
  const { id } = useParams();

  const [member, setMember] = React.useState<MemberEntity>({
    id: '',
    login: '',
    avatar_url: '',
    html_url: '',
  });

  const api = `https://api.github.com/users/${member.login}`;

  const history = useHistory();

  React.useEffect(() => {
    fetch(api)
      .then((response) => response.json())
      .then((json) => setMember(json));
  }, [member]);

  const handleClick = () => {
    history.push('/list');
  };

  return (
    <>
      <Typography variant="h2" gutterBottom component="div">
        Detail page
      </Typography>
      <h3>User Id: {id}</h3>
      <RedirectButton onClick={handleClick} message="Back to List page" />
      <div css={companyListStyles}>
        <Card sx={{ maxWidth: 345, marginBottom: 5 }}>
          <CardMedia component="img" image={member.avatar_url} />
          <CardContent>
            <Typography gutterBottom variant="h3" component="div">
              {member.login}
            </Typography>
            <Typography variant="subtitle1" gutterBottom component="div">
              {member.html_url}
            </Typography>
            {/* <Typography variant="subtitle1" gutterBottom component="div">
              {member.gender}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {member.status}
            </Typography> */}
          </CardContent>
        </Card>
      </div>
    </>
  );
};
