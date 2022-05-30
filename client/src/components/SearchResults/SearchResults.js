import React from 'react';
import { useState, useEffect } from 'react';
import {searchAPI} from '../../utils/API';
import Grid from '@mui/material/Grid';
import SearchBar from '../SearchBar/SearchBar';
import Typography from '@mui/material/Typography';

const SearchResults = () => {

    

    const [workSelected, setWorkSelected] = useState({});


    function onSelect(selectedWork){
        console.log('selected work:', selectedWork)
        setWorkSelected(selectedWork);
    
    }
    

    return (
        <Grid>
            <Grid item>
                <SearchBar
                    onSelect={onSelect}
                />
            </Grid>
            <Grid item container>
                


            </Grid>
        </Grid>
    )




}

export default SearchResults