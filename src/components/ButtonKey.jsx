import React from 'react';
import Button from '@mui/material/Button';
import {shades} from '../theme';

const ButtonKey =({word})=>{


return (

    <Button  sx={{backgroundColor: shades.grey[300],
        marginRight: "0.5rem",
        borderRadius:"28px" , color: "white"}}>
      {<span style={{fontSize: "12px", fontWeight: "bold"}}>{word.toUpperCase()}</span>}
  </Button>
)

}


export default ButtonKey;