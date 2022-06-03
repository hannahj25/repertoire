import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Autocomplete from '@mui/material/Autocomplete';
import {useState} from 'react';
import { searchAPI } from '../../utils/API';
import _ from 'lodash';

function SearchBar(props) {
  

  const [result, setResult] = useState([]);
  const [search, setSearch] = useState('');
  const [error, setError] = useState('');


  const searchMusic = (query) =>
  searchAPI(query)
  .then((res) => {
    console.log(res.data);

    if(!res.data.results){
      setError('No result')
    }else{
      setError("");
      const result = res.data.results.map(result => {
        if(!result.work){
          return null;
        }
        return {
          label: result.work?.title + ' by ' + result.composer.complete_name,
          composer: result.composer,
          work: result.work,

        }
      }).filter((res) => res !== null);

      // setResult('aaaa');
      setResult(result);
    }
  })
  .catch((err) => console.log(err));


  const debouncedApiQuery = _.throttle(searchMusic, 1500);
 

  const handleInputChange = (e) => {
    debouncedApiQuery(e.target.value);

  };

 
  function onSelect(e, value){
    console.log({value});
    props.onSelect(value);
    
  }


    return (
      
        <Autocomplete
          disablePortal
          onChange={onSelect}
          options={result}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField error={!!error}  onInput={handleInputChange} {...params} label="Search..." />}
        />
        
          // <TextField 
          //         id="outlined-basic" 
          //         label="Search classical works" 
          //         name="search"
          //         value={props.value}
          //         onChange={props.handleInputChange}
          //         variant="outlined" 
          //         />
          //         <br/>
          // <Button style={{marginTop: '20px', backgroundColor: '#3581B8'}}type="button"  variant="contained" onClick={props.handleFormSubmit}>Search</Button>
  

      
    );
  }

  
  
  
export default SearchBar;



