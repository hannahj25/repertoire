import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import HomeIcon from '@mui/icons-material/Home';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import LoginIcon from '@mui/icons-material/Login';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Repertoire
          </Typography>
          <MenuItem>
            <IconButton size="large" color="inherit">
                <HomeIcon />
            </IconButton>
          </MenuItem>
          <MenuItem>
            <IconButton size="large" color="inherit">
                <LibraryMusicIcon />
            </IconButton>
          </MenuItem>
          <MenuItem>
            <IconButton size="large" color="inherit">
                <LoginIcon />
            </IconButton>
          </MenuItem>
        </Toolbar>
      </AppBar>
    </Box>
  );
}