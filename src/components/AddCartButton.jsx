import React from 'react';
import Button from '@mui/material/Button';
import {shades} from '../theme';
import {theme} from '../theme';
import {useState} from 'react';
import addImg from '../images/add.svg';
import {Box, Typography} from "@mui/material";

const AddCartButton = ({addToChart})=>{

    const [isHovered,setIsHovered]= useState(false);

return (

    <button style={{borderRadius: "0",padding:"0"}} onClick={addToChart}>
     <Box backgroundColor={isHovered?"red":theme.palette.red.main} onMouseOut={()=>setIsHovered(false)} onMouseOver={()=>setIsHovered(true)} alignItems="center" display="flex" height="30px" width="160px" position="relative" >
        
         <Box  position="absolute" left="0"  marginRight="0" zIndex="2">
            <img src={addImg} width="24px" height="24px"/>  
            </Box>
            
        <Typography fontSize="16px" color="white" position="absolute" right="25%">Add to cart</Typography>
         
     </Box>
     </button>

)



}


export default AddCartButton;