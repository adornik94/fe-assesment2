import React from 'react';
import {Box,Button} from "@mui/material";
import {IconButton,Typography} from "@mui/material";
import styled from "@emotion/styled";
import {shades} from "../theme";
import packageimg from "../images/package.svg";
import {theme} from '../theme';
import data from '../data/data.json';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import starImg from "../images/star.svg";
import starfilledImg from "../images/star-filled.svg";
import discountImg from "../images/discount.svg";
import zoominImg from "../images/zoom-in.svg";
import AddCartButton from './AddCartButton';
import TextField from '@mui/material/TextField';
import {useState} from 'react';




const themecard = createTheme({
    palette: {
      tomato: '#FF6347',
      black: '#080808',
      grey: '#e4e4e4',
      pink: {
        deep: '#FF1493',
        hot: '#FF69B4',
        medium: '#C71585',
        pale: '#DB7093',
        light: '#FFB6C1',
      },
    },
  });



const CartMenu =({cartmove,changeCartNums,addToChart2})=>{

   
 const [nums,setNums] =useState(1);

 
const addToChart=()=>{

   console.log("Added");
}

  
return(

    <ThemeProvider theme={themecard}>
    <Box  padding= "40px 4%" paddingTop="90px">
      <Box display="flex">
         <Box display="flex" flexDirection="column">
            <Box padding="40px 40px" marginBottom ="20px" width="130px" height="130px"  border= {`1px solid ${shades.grey[200]}`}><img  src={packageimg} width="50px" height="50px"/></Box>
            <Box padding="40px 40px" width="130px" height="130px"  border={`1px solid ${shades.grey[200]}`}><img src={packageimg} width="50px" height="50px"/></Box>
         </Box>
         <Box marginLeft="20px" display="flex">
            <Box height="410px" width="410px" padding="105px 105px" position="relative"  border={`1px solid ${shades.grey[200]}`}>
              <img src={packageimg}  width="200px" height="200px"/>
               <Box position="absolute" right="5" bottom="5" zIndex="2"><img src={zoominImg} width="20px" height="30px"/></Box>
            </Box>
            <Box marginLeft="20px">
                 <Typography fontSize="16px" color="black">{data.article.title}</Typography>
                 <Box marginTop="10px"></Box>
                 <Typography fontSize="14px" color="grey" marginBottom="10px">by <span color="#088F8F"><a 
                 href={data.article.supplier_link}>{data.article.supplier_name}</a></span></Typography>
                 <Box display="flex" marginBottom ="20px">
                    <Box padding="0px 5px"><img src={starfilledImg} width="20px" height="20px" /></Box>
                    <Box padding="0px 5px"><img src={starfilledImg} width="20px" height="20px" /></Box>
                    <Box padding="0px 5px"><img src={starfilledImg} width="20px" height="20px"/></Box>
                    <Box padding="0px 5px"><img src={starImg} width="20px" height="20px"/></Box>
                    <Box padding="0px 5px"><img src={starImg} width="20px" height="20px"/></Box>
                 </Box>
                 <Box display="flex" marginBottom="5px">
                    <Typography fontSize="16px"marginRight="5px" fontWeight="bold" color="black">{data.article.price+',00 '+
                     data.article.currency}</Typography>
                     <Typography marginTop="2px" fontWeight="bold" fontSize="12px" color="grey">{" + "+data.article.transport_costs+',00 '+data.article.currency+ ' shipping'}</Typography>
                    <Box marginLeft="10px"> <img src ={discountImg} width="20px" height="20px"/></Box>
                 </Box>
                 <Typography fontWeight="bold" fontSize="12px" color="grey">{'all prices incl. '+data.article.vat_percent+' % taxes'}</Typography>
                 <Box ml="0" marginTop="55%" display="flex" alignItems="center"> 
                 <TextField
                  id="standard-multiline-static"
                  multiline
                 rows={1}
                 value={nums}
                 onChange ={(event)=>{changeCartNums(event.target.value); setNums(event.target.value)}}
                variant="standard"
                style = {{width: 50 ,marginRight: "5px",border: `1px solid ${shades.grey[700]}`}}
               
        />
                     <Typography mr= "20px" fontSize="16px" color="black">PCE</Typography>
                    <AddCartButton  addToChart={addToChart2} />
                 </Box>
            </Box>
         </Box>
      </Box>

    </Box>
    </ThemeProvider>

)



}


export default CartMenu;