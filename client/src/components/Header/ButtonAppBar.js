import * as React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import HomeIcon from '@mui/icons-material/Home';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';


export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Repertoire
          </Typography>
          <MenuItem>
            <IconButton component={Link} to="/" size="large" color="inherit">
                <HomeIcon />
            </IconButton>
          </MenuItem>
          <MenuItem>
            <IconButton component={Link} to="/my-repertoire" size="large" color="inherit">
                <LibraryMusicIcon />
            </IconButton>
          </MenuItem>
          
          <Button component={Link} to="/login" color="inherit">Login</Button>
          
    
          <Button component={Link} to="/create-account" color="inherit">Create Account</Button>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}