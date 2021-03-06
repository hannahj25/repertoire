import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { LOGIN_USER } from '../utils/mutations';

const Login = (props) => {
    const [formState, setFormState] = useState({
      email: '',
      password: '',
    });
    const [login, { error, data }] = useMutation(LOGIN_USER);
  
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
        const { data } = await login({
          variables: { ...formState },
        });
  
        Auth.login(data.login.token);
      } catch (e) {
        console.error(e);
      }

      setFormState({
        email: '',
        password: '',
      });
    };
  
    return (
      <main >
         <div style={{display: 'flex', justifyContent: 'center'}}>
         
                <Box
                component="div"
                sx={{
                  '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off" 
                style={{display: 'flex', justifyContent: 'center', marginTop: '150px', backgroundColor: '#3581B8', width: '30%', borderRadius: '10px', paddingTop: '50px', paddingBottom: '50px'}}
                
                
              >
                
                
                <form style={{textAlign: 'center', backgroundColor: '#FFE5D9', borderRadius: '10px', padding: '60px'}} >
                <h4 style={{textAlign: 'center'}}>Login or <Link to="/create-account">create account</Link></h4>
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
                  
                  <Button style={{marginTop: '20px', backgroundColor: '#3581B8'}}type="button" onClick={handleFormSubmit} variant="contained">Login</Button>
                </form>
                
                {error && (
               <div className="my-3 p-3 bg-danger text-white">
                 {error.message}
               </div>
             )}
                
                </Box>
                
                </div>   
            
  
             
            
          
      </main>
    );
  };

  export default Login;