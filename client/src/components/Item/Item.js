import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Item() {
    return (
      <Card sx={{ borderRadius: 5, width: '100%', height: 'fitContent'  }}>
        <CardContent>
          <Typography variant="h5" component="div">
            Title
          </Typography>
          <Typography sx={{ mb: -1 }} color="text.secondary">
            Composer
          </Typography>
        </CardContent>
        <CardActions>
          <Button style={{backgroundColor: '#3581B8'}}size="small" variant="contained">Details</Button>
        </CardActions>
      </Card>
    );
  }

//   '&:hover': {
//     backgroundColor: '#FFE5D9',
//     opacity: [0.8, 0.8, 0.8],
//   },