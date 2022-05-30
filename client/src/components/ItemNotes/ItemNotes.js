import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function ItemNotes() {
    const [value, setValue] = React.useState('');
  
    const handleChange = (event) => {
        event.preventDefault()
      setValue(event.target.value);
    };

    const handleNoteSave = async (event) => {
        event.preventDefault();
        console.log(value);
    
  
        setValue({
          notes: ''
        });
      };

    return (
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              id="standard-multiline-flexible"
              label="Notes"
              multiline
              maxRows={4}
              value={value}
              onChange={handleChange}
              variant="standard"
            />
          </div>
          <Button variant="contained" type="button" onClick={handleNoteSave}>Save</Button>
        </Box>
      );
    }