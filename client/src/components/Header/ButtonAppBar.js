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

import Auth from '../../utils/auth';


export default function ButtonAppBar() {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor: '#3581B8'}}>
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1, color: '#FFE5D9' }}>
            Repertoire
          </Typography>
          <MenuItem>
            <IconButton component={Link} to="/" size="large" color="inherit">
                <HomeIcon style={{color: '#FFE5D9'}} />
            </IconButton>
          </MenuItem>
          {Auth.loggedIn() ? (
          <MenuItem>
          
            <IconButton component={Link} to="/my-repertoire" size="large" color="inherit">
                <LibraryMusicIcon style={{color: '#FFE5D9'}} />
            </IconButton>
          </MenuItem>
          ) : (
            <></>
          )}
          
          {Auth.loggedIn() ? (
            <MenuItem>
            <Button component={Link} to="/" style={{color: '#FFE5D9'}}
            onClick={logout} size="large" >Logout</Button>
            </MenuItem>
          ) : (
            <>
            <MenuItem>

          <Button component={Link} to="/login" style={{color: '#FFE5D9'}} size="large" >Login</Button>
          </MenuItem>

          <MenuItem>
    
          <Button component={Link} to="/create-account" style={{color: '#FFE5D9'}} size="large" >Create Account</Button>
          </MenuItem>
          </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}