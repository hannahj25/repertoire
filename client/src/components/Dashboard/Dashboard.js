import * as React from 'react';
import Grid from '@mui/material/Grid';
import Column from '../Column/Column'
import Item from '../Item/Item';


export default function Dashboard() {
    return (
        <Grid  style={{backgroundColor: '#3581B8', paddingBottom: '70px', width: '80%',
        marginLeft: 'auto',
        marginRight: 'auto'}}justifyContent="center" alignItems="center" container spacing={6}>
            <Grid item>
            <h3 style={{color:'#000000', textAlign: 'center'}}>To Learn</h3>
                <Column></Column>
            </Grid>
            <Grid item>
            <h3 style={{color:'#000000', textAlign: 'center'}}>Learning</h3>
                <Column>
               
                </Column>
            </Grid>
            <Grid item>
            <h3 style={{color:'#000000', textAlign: 'center'}}>Learned</h3>
                <Column></Column>
            </Grid>
        </Grid>
    );
  }