import React from "react";
import { Link, useParams } from "react-router-dom";
import Typography from '@mui/material/Typography';

export const DetailPage: React.FC = () => {
  const { id } = useParams();

  return (
    <>
      <Typography variant='h2' gutterBottom component='div'>Detail page</Typography>
      <h3>User Id: {id}</h3>
      <Link to="/list">Back to list page</Link>
    </>
  );
};
