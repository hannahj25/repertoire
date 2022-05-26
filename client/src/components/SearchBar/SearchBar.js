import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function SearchBar(props) {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="search">Search:</label>
          <TextField 
                  id="outlined-basic" 
                  label="Search classical works" 
                  name="search"
                  value={props.value}
                  onChange={props.handleInputChange}
                  variant="outlined" 
                  style={{marginBottom: '10px'}}
                  />
          <br />
          <Button style={{marginTop: '20px', backgroundColor: '#3581B8'}}type="submit" variant="contained" onClick={props.handleFormSubmit}>Login</Button>
            Search
          <Button/>
        </div>
      </form>
    );
  }

  
  
  
export default SearchBar;