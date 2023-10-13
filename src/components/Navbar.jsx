import {Box,Badge,IconButton} from '@mui/material';
import React from 'react';
import {theme} from '../theme';
import favorite from '../images/favorite.svg';
import factssoft from '../images/facts-soft.svg';
import cart from '../images/cart.svg';
import data from '../data/data.json';
import { BorderAllRounded } from '@mui/icons-material';
import {useState} from 'react';
import TextField from '@mui/material/TextField';
import AddCartButton from './AddCartButton';
import {shades} from '../theme';
import {Typography} from '@mui/material';


const Navbar = ({cartmove,numberOfItems,valueChanged})=>{


const [shadowNav,setShadowNav]= useState(false);
const [cartbuttonMove,setCartButtonMove] = useState(false);

      const setShadow = ()=>{

           if(window.scrollY>60){

              setShadowNav(true);
 
          }else{
            setShadowNav(false);
        }
    }


 

 window.addEventListener("scroll",setShadow);

return (

    <Box
    className={shadowNav? "colorshadow": "withoutshadow"}
     display="flex"
     alignItems="center"
     width="100%" 
     height="60px"
     backgroundColor="rgba(255,255,255,0.95)"
     color="black"
     position="fixed"
     top="0"
     left="0"
     borderBottom={`2px solid ${theme.palette.grey.light}`}
     zIndex="4"
     
     > 
      <Box
       display="flex"
       width="95%"
       margin="auto"
       justifyContent="space-between"
       alignItems= "center"
      

      >
       <Box marginLeft="20px" fontWeight="500" fontSize={theme.typography.h3.fontSize} color={theme.palette.red.main}>{data.article.title}</Box>
       <Box
        display="flex"
       justifyContent="space-between"
        alignItems="center"
        columnGap="20px">

            
             {cartmove?<Box display="flex" alignItems="center"><TextField
                  id="standard-multiline-static"
                  multiline
                 rows={1}
                defaultValue="1"
                variant="standard"
                style = {{width: 50,paddingLeft:"10px" ,marginRight: "5px",border: `1px solid ${shades.grey[700]}`}}
        /> <Typography mr= "20px" fontSize="16px" color="black">PCE</Typography>
        <AddCartButton/>
        
        </Box>:<></> }
            <Box><img src={favorite} width="30px" height= "22px"/></Box>
            <Box height="60px" paddingTop="20px" paddingRight="22px" borderRight={`1px solid ${theme.palette.grey.main}`}><img src={factssoft} width="22px" height= "22px"/></Box>
            <Badge 
             badgeContent={valueChanged?numberOfItems:data.cart.items}
              color="red"
             sx={{
                "& .MuiBadge-badge":{
                    right: 5, 
                    top:5,
                    padding: "0 4px",
                    height: "14px",
                    width: "9px",
                    borderEndStartRadius:"100%",
                    borderStartEndRadius:"100%",
                    BorderAllRounded:"100%", 
                    color:"white"

                }

             }}>
             <Box><img src={cart}  width={valueChanged?"33px":"22px"} height={valueChanged?"40px":"28px"}/></Box>
            </Badge>
            
       </Box>
      </Box>
    </Box>
)




}

export default Navbar;