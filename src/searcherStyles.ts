import { css, SerializedStyles } from '@emotion/react';

export const getSearcherStyles = (): SerializedStyles =>
  css({
    display: 'flex',
    padding: '50px',
    flexDirection: 'row',
    color: '#fff',
  });

export const getFieldStyles = (): SerializedStyles =>
  css({
    '& label': {
        color: '#fff',
    },
    '& .MuiInput-underline': {
        borderBottomColor: '#fff',
      },
    '& label.Mui-focused': {
        color: '#fff',
      },
      '&:hover fieldset': {
        borderColor: '#fff',
      },
      '&:fieldset': {
        borderColor: '#fff',
      },
      '& .MuiOutlinedInput-root': {
        color: '#fff',
        '& fieldset': {
          borderColor: '#fff',
        },
    }
    
  });

export const getButtonStyles = (): SerializedStyles =>
  css({
    color: '#fff',
  });