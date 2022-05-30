import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


export default function Home() {
    return <div style={{ marginTop: '150px', display: 'flex', justifyContent: 'center'}}>
           <Box 
        sx={{
          width: 700,
          paddingTop: 0,
          borderRadius: 5,
          height: 500,
          backgroundColor: '#3581B8',
          textAlign: 'center'
       
         
        }}
      >
         <Typography variant="h3" component="div" style={{color: '#FFE5D9', marginTop: '80px'}}>
             Welcome to Repertoire!
         </Typography>
         <Typography variant='h5' style={{color: '#FFE5D9', margin: '20px'}}>
             Repertoire is an online platform for searching classical composers and works, and compiling chosen works into your own lists - 'To Learn', 'Learning', and 'Learned'.
         </Typography>
         <Typography variant='h5' style={{color: '#FFE5D9', margin: '20px'}}>
             Every item you add can be customised by setting optional deadlines and writing your own notes.
         </Typography>
         <Typography variant='h5' style={{color: '#FFE5D9', margin: '20px'}}>
             Get started by <Link to='/create-account'>creating an account</Link>!
         </Typography>
      </Box>
        
        </div>
    }