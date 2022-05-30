import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ItemNotes from '../ItemNotes/ItemNotes';





const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    height: 500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    borderRadius: 5,
    boxShadow: 24,
    p: 4,
  };

  export default function ItemDetailsModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    return (
      <div>
        <Button onClick={handleOpen} style={{backgroundColor: '#3581B8'}}variant="contained" size="small">Work Details</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
          <Card sx={{ borderRadius: 5, width: '100%', height: 'fitContent', textAlign: 'left' }}>
        <CardContent>
          <Typography variant="h5" component="div" sx={{marginBottom: '10px'}}>
          Piano Sonata no. 14 in C sharp minor, op. 27 no. 2, \"Moonlight\"
          </Typography>
          <Typography sx={{ mb: 1 }} >
            Composer: Ludwig Van Beethoven
          </Typography>
          <Typography sx={{ mb: 1 }} >
            Genre: Keyboard
          </Typography>
          <Typography sx={{ mb: 1 }} >
            Status: Learning
          </Typography>
          <Typography sx={{ mb: 1 }} >
            Deadline: 30/10/2022
          </Typography>
          <ItemNotes></ItemNotes>
         
        </CardContent>
        </Card>
          </Box>
        </Modal>
      </div>
    );
  }