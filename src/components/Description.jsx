import React from 'react';
import {Box,Typography,IconButton} from '@mui/material';
import {shades} from '../theme';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import data from '../data/data.json';
import StatBox from '../components/StatBox';
import {theme} from '../theme';


const themedesc = createTheme({
    palette: {
      tomato: '#FF6347',
      black: '#080808',
      grey: '#D0D0D0',
      pink: {
        deep: '#FF1493',
        hot: '#FF69B4',
        medium: '#C71585',
        pale: '#DB7093',
        light: '#FFB6C1',
      },
    },
  });

const Description = ()=>{


const pricefeatures= {"Minimum order":data.article.minimum_order_quantity + " "+data.article.unit,
                      "Shipping": 680+","+96+ "EUR",
                      "Delivery": data.article.delivery_time+ " days"}



    return (

        <ThemeProvider theme={themedesc}>
        <Box backgroundColor={shades.grey[300]}>
          <Box  padding="40px 4%">
             <Typography fontSize={theme.typography.h4.fontSize} color={theme.palette.red.main}>DESCRIPTION</Typography>
             <Box width="996px"> <Typography fontSize="14px" color="black">
                  {data.article.description_long}
             </Typography>

             <Box display="flex">
                  <StatBox  title="DETAILS" secondsub="Attachments" subtitle="Features" 
                  features={data.article.features}
                  attachments={data.article.attachments}
                  keywords={data.article.keywords}
                  subtitle3="Keywords"
                  />
                  <StatBox title="PRICING & SHIPPING" subtitle3="Price breaks" 
                  pricebreaks={data.article.price_breaks} features={pricefeatures}/>
              </Box>
             </Box>
            
          </Box>
        </Box>
        </ThemeProvider>
    )






}


export default Description;