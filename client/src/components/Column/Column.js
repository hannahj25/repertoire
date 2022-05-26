import * as React from 'react';
import Box from '@mui/material/Box';
import Item from '../Item/Item';


export default function Column() {
    return (
      <Box 
        sx={{
          width: 500,
          paddingTop: 0,
          borderRadius: 5,
          height: 300,
          backgroundColor: '#FFE5D9',
       
         
        }}
      >
          <Item></Item>


      </Box>
    );
  }