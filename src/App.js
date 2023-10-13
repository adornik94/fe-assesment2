import React from 'react';
import './index.css';
import cart from './images/cart.svg';
import favorite from './images/favorite.svg';
import star from './images/star.svg';
import Navbar from './components/Navbar';
import CartMenu  from './components/CartMenu';
import Description from './components/Description';
import {Box} from '@mui/material';
import {useState} from 'react';

const App=()=>{
    
   const [cartbuttonMove,setCartButtonMove] = useState(false);
   const [cartNums,setCartNums] = useState(1);
   const [valueChanged,setvalueChanged]=useState(false);


   const addTocartMove= ()=>{

        if(window.scrollY>410){

          setCartButtonMove(true);
        }else{ 
          setCartButtonMove(false);

        }

   }
   const changeCartNums =(value)=>{

      setCartNums(value);
      console.log(value);
      
   }

   const addToChart= ()=>{

      setvalueChanged(true);
      console.log("Adede to Chart");

   }

   window.addEventListener("scroll",addTocartMove);

 return (
    <Box height="100%">
     <Navbar  valueChanged={valueChanged}  numberOfItems={cartNums} cartmove={cartbuttonMove}/>
     <CartMenu  addToChart2 = {addToChart} changeCartNums={changeCartNums} cartmove={cartbuttonMove}/>
     <Description/>
    </Box>
 )


}

export default App;