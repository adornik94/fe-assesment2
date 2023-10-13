import React from 'react';
import {Box} from "@mui/material";
import {Divider,IconButton,Typography} from "@mui/material";
import {shades} from '../theme';
import FlexBox from './FlexBox';
import {theme} from '../theme';
import attachmentImg from '../images/attachment.svg';
import Button from '@mui/material/Button';
import ButtonKey from './ButtonKey';

const StatBox =({title,subtitle,features,attachments,keywords,secondsub,pricebreaks,subtitle3})=>{



const featureskeys =features!=null? Object.keys(features):null;
let featuresvalues = features!=null? Object.values(features):null;



let priceskeys = pricebreaks!=null?Object.keys(pricebreaks):null;
let pricesvalues = pricebreaks!=null?Object.values(pricebreaks):null;


return(

    <Box marginRight="20px" marginTop="40px" width="50%" paddingBottom="2%" backgroundColor="white">
        <FlexBox mb="15px" ml="10px" mt="10px">
        <Typography fontWeight="bold"  fontSize={theme.typography.h4.fontSize} color={theme.palette.red.main}>{title}</Typography>
        </FlexBox>
        <Divider/>
        <FlexBox  mt="15px" ml="10px" color={shades.grey[600]}>
            <Typography  fontWeight="bold" fontSize={theme.typography.h4.fontSize}>{subtitle}</Typography>
        </FlexBox>
        <Box ml="10px" mt="10px" display="flex">
            <ul className='keys'>
              {featureskeys?.map((el)=><li key={el}>{el+":"}</li>)}
            </ul>
            <ul className='values'>
             {featuresvalues?.map((e)=><li key={e}>{e}</li>)}
            </ul>
        </Box>
        <FlexBox  mt="15px" ml="10px" color={shades.grey[600]}>
            <Typography  fontWeight="bold" fontSize={theme.typography.h4.fontSize}>{secondsub}</Typography>
        </FlexBox>
        <Box ml="10px">
            {attachments?.map((el,i)=>{

                return <Box  key= {el+i+2} display="flex">
                          <Box padding="5px 0"><img src={attachmentImg}  width="14px" height="14px"/></Box>
                          <Typography fontSize="14px" ml="10px"><a href={el.file_link}>{el.file_label}</a></Typography>
                      </Box>
            })}
        </Box>
        <FlexBox mt="15px" ml="10px" color={shades.grey[600]}>
            <Typography fontWeight="bold" fontSize={theme.typography.h4.fontSize}>{subtitle3}</Typography>
        </FlexBox>
        <Box ml="30px" padding="10px 0" paddingBottom="5px">
            {
                priceskeys?.map((e,i)=>{

                    return <Box key={e+i+4} width="50%" p="4px 0" borderBottom={`1px solid ${shades.grey[300]}`} display="flex" alignItems="center">
                        
                        <Typography fontWeight="bold" fontSize="14px" marginRight="20px">{"ex "+ e+" PCE"}
                        </Typography>
                        <Typography fontWeight="bold" fontSize="14px">{pricebreaks[e]+ " EUR/PCE"}</Typography>
                        
                    </Box>
                })
            }
        </Box>
        <Box ml="10px" display="flex" alignItems="center">
           {
             keywords?.map((el)=>{

                return <ButtonKey key={el+'a'} word ={el}/>
             })
           }
        </Box>

    </Box>
)




}


export default StatBox;