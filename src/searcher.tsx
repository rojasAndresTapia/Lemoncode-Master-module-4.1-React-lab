import React from "react";
import {getButtonStyles, getFieldStyles, getSearcherStyles} from './searcherStyles';
import Button from '@mui/material/Button';
import {TextField } from '@mui/material';

interface Searcher {
    data?: string,
    label?: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Searcher = ({data, label, onChange, onClick}: Searcher): JSX.Element => {
   
    return (
        <>
        <div css={getSearcherStyles}>
            <TextField value={data} onChange={onChange} id="outlined-basic" label={label} variant="outlined" css={getFieldStyles}/>
            <Button variant="contained" onClick={onClick} css={getButtonStyles}>Search</Button>
        </div>
        </>
    );
};

