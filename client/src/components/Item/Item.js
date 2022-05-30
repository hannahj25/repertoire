import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ItemDetailsModal from '../ItemDetailsModal/ItemDetailsModal';

export default function Item() {
    return (
      <Card sx={{ borderRadius: 5, width: '100%', height: 'fitContent', textAlign: 'left' }}>
        <CardContent>
          <Typography variant="h5" component="div">
          Piano Sonata no. 14 in C sharp minor, op. 27 no. 2, \"Moonlight\"
          </Typography>
          <Typography sx={{ mb: -1 }} color="text.secondary">
            Ludwig Van Beethoven
          </Typography>
        </CardContent>
        <CardActions>
          {/* <Button style={{backgroundColor: '#3581B8'}}size="small" variant="contained">Details</Button> */}
          <ItemDetailsModal></ItemDetailsModal>
        </CardActions>
      </Card>
    );
  }

//   '&:hover': {
//     backgroundColor: '#FFE5D9',
//     opacity: [0.8, 0.8, 0.8],
//   },