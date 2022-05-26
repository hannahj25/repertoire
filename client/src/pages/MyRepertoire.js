import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_ITEM } from '../utils/mutations';
import Dashboard from '../components/Dashboard/Dashboard';
import SearchModal from '../components/SearchModal/SearchModal';



export default function MyRepertoire() {
return <div style={{ marginTop: '80px', textAlign: 'center'}}>
    <SearchModal/>
    <Dashboard/>
    </div>
}

 