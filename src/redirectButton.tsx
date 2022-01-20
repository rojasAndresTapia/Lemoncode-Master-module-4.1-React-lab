import React from 'react';
import Button from '@mui/material/Button';
import { RedirectButtonStyles } from './redirectButtonStyles';

interface RedirectButton {
  message: String;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const RedirectButton = ({
  onClick,
  message,
}: RedirectButton): JSX.Element => {
  return (
    <div css={RedirectButtonStyles}>
        <Button onClick={onClick} variant='contained'>
          {message}
        </Button>
    </div>
  );
};
