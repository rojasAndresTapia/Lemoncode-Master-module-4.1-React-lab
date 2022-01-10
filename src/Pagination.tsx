import React from 'react';
import Button from '@mui/material/Button';
import { paginationStyles } from './PaginationStyles';

export const Pagination = ({pageNumber, setPageNumber}) => {
  // handlers funcs

    const previous = () => {
        if( pageNumber > 1) {
            setPageNumber ((x) => x - 1); 
        } else {
            return;
        }
   
    };
 
 
    const next = () => {
        if (pageNumber < 42) {
            setPageNumber ((x) => x + 1);
        } else {
            return;
        }
      
    };
 
  return (
    <>
      <div css={paginationStyles}>
        <Button onClick={previous} variant='contained'>
          Previous
        </Button>
        <Button onClick={next} variant='contained'>
          Next
        </Button>
      </div>
    </>
  );
};
