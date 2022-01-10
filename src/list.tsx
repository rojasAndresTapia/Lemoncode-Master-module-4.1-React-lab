import React from 'react';
import { Link, generatePath } from 'react-router-dom';
import { Searcher } from './Searcher';
import { RickMortyButton } from './RickMortyButton';
import { ContainerButtonStyles} from './RickMortyButtonStyles';
import { StyledTableCell, StyledTableRow } from './listStyles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

interface MemberEntity {
  id: string;
  login: string;
  avatar_url: string;
}

export const ListPage: React.FC = () => {
  // States
  const [company, setCompany] = React.useState({
    name: 'Lemoncode',
    url: `https://api.github.com/orgs/Lemoncode/members`,
  });
  const [members, setMembers] = React.useState<MemberEntity[]>([]);

  React.useEffect(() => {
    fetch(`${company.url}`)
      .then((response) => response.json())
      .then((json) => setMembers(json));
  }, []);

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
      .then((json) => setMembers(json))
      .catch((error) => {
        alert('Try again with a new company');
        window.location.href = 'http://localhost:8080/list';
      });
  };

  return (
    <>
      <div css={ContainerButtonStyles}>
        <Typography variant='h2'>
          List Page
        </Typography>
        <RickMortyButton/>
      </div>
      <TableContainer component={Paper}>
      <h4>Write the name of the company to get the list of members</h4>
        <Searcher
          label='company'
          data={company.name}
          onChange={handleInputChange}
          onClick={handleButtonClick}
        />
        <Table sx={{ minWidth: 700 }} aria-label='customized table'>
          <TableHead>
            <StyledTableRow key='firstRow'>
              <StyledTableCell align='center'>Avatar</StyledTableCell>
              <StyledTableCell align='center'>Id</StyledTableCell>
              <StyledTableCell align='center'>Name</StyledTableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {members.map((member, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell align='center'>
                  <img src={member.avatar_url} style={{ width: '5rem' }} />
                </StyledTableCell>
                <StyledTableCell align='center'>
                  <span>{member.id}</span>
                </StyledTableCell>
                <StyledTableCell align='center'>
                  <Link to={generatePath('/detail/:id', { id: member.login })}>
                    {member.login}
                  </Link>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
