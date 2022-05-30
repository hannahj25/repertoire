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
    }
    

    return (
        <Grid>
            <Grid item>
                <SearchBar
                    onSelect={onSelect}
                />
            </Grid>
            <Grid item container>
                {/* {result.map((el) => {
                    return (
                        <Typography >{el.work?.title}</Typography>
                    )
                })} */}
                {/* List results??? work title + composer name
                    + make results clickable to view further details??
                
                */}


            </Grid>
        </Grid>
    )




}

export default SearchResults