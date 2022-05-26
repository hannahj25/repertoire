import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function SearchBar(props) {
    return (
      <form>
        
          <TextField 
                  id="outlined-basic" 
                  label="Search classical works" 
                  name="search"
                  value={props.value}
                  onChange={props.handleInputChange}
                  variant="outlined" 
                  />
                  <br/>
          <Button style={{marginTop: '20px', backgroundColor: '#3581B8'}}type="button"  variant="contained" onClick={props.handleFormSubmit}>Search</Button>
  

      </form>
    );
  }

  
  
  
export default SearchBar;