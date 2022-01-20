import React from "react";
import { useHistory, useParams } from "react-router-dom";
import Typography from '@mui/material/Typography';
import { RedirectButton } from "./redirectButton";

export const DetailPage: React.FC = () => {
  const { id } = useParams();

  const history = useHistory();

  const handleClick = () => {
    history.push('/list');
  }

  return (
    <>
      <Typography variant='h2' gutterBottom component='div'>Detail page</Typography>
      <h3>User Id: {id}</h3>
      <RedirectButton
      onClick={handleClick}
      message='Back to List page'
      />
    </>
  );
};
