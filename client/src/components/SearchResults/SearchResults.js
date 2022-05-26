import React from 'react';
import { useState, useEffect } from 'react';
import {searchAPI} from '../../utils/API';
import Grid from '@mui/material/Grid';
import SearchBar from '../SearchBar/SearchBar';
import Typography from '@mui/material/Typography';

const SearchResults = () => {
    const [result, setResult] = useState([]);
    const [search, setSearch] = useState('');

    const searchMusic = (query) =>
    searchAPI(query)
    .then((res) => setResult(res.data.results))
    .catch((err) => console.log(err));

    const handleInputChange = (e) => setSearch(e.target.value);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        searchMusic(search);
    };

    

    return (
        <Grid>
            <Grid item>
                <SearchBar
                value={search}
                handleInputChange={handleInputChange}
                handleFormSubmit={handleFormSubmit}
                />
            </Grid>
            <Grid item container>
                {result.map((el) => {
                    return (
                        <Typography >{el.composer.complete_name}</Typography>
                    )
                })}
                {/* List results??? work title + composer name
                    + make results clickable to view further details??
                
                */}


            </Grid>
        </Grid>
    )




}

export default SearchResults