import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const CreateAccount = () => {
    const [formState, setFormState] = useState({
      username: '',
      email: '',
      password: '',
    });
    const [addUser, { error, data }] = useMutation(ADD_USER);
  
    // update state based on form input changes
    const handleChange = (event) => {
      const { name, value } = event.target;
  
      setFormState({
        ...formState,
        [name]: value,
      });
    };
  
    // submit form
    const handleFormSubmit = async (event) => {
      event.preventDefault();
      console.log(formState);
  
      try {
        const { data } = await addUser({
          variables: { ...formState },
        });
  
        Auth.login(data.addUser.token);
      } catch (e) {
        console.error(e);
      }
    };
  
    return (
      <main >
       
         <div >
       
                <Box
                component="div"
                sx={{
                  '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off" 
                style={{display: 'flex', justifyContent: 'center', }}
                
                
              >
                
                <form style={{textAlign: 'center', backgroundColor: '#FBF7F7', padding: '40px'}}>
                <h4 style={{textAlign: 'center'}}>Create an account to get started!</h4>
                 <TextField 
                  id="outlined-basic" 
                  label="Username" 
                  placeholder="Your username"
                  name="username"
                  type="username"
                  value={formState.username}
                  onChange={handleChange}
                  variant="outlined" 
                  style={{marginBottom: '10px'}}
                  />
                    <TextField 
                  id="outlined-basic" 
                  label="Email" 
                  placeholder="Your email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                  variant="outlined" 
                  style={{marginBottom: '10px'}}
                  />
                  <TextField 
                  id="outlined-basic" 
                  label="Password" 
                  placeholder="******"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                  variant="outlined" 
                  style={{marginBottom: '10px'}}
                  />
                  
                  <Button style={{marginTop: '20px', backgroundColor: '#3581B8'}}type="button" onClick={handleFormSubmit}variant="contained">Create Account</Button>
                </form>
                </Box>
                </div>   
            
  
              {error && (
                <div className="my-3 p-3 bg-danger text-white">
                  {error.message}
                </div>
              )}
            
          
      </main>
    );
  };

  export default CreateAccount;