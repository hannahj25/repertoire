import React from 'react';
import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//import pages and components
import Home from './pages/Home';
import CreateAccount from './pages/CreateAccount';
import Login from './pages/Login';
import MyRepertoire from './pages/MyRepertoire'
import ButtonAppBar from './components/Header/ButtonAppBar.js';





const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <ButtonAppBar />
          <div className="container">
            <Routes>

            <Route 
                path="/" 
                element={<Home />} 
              />

            <Route 
                path="/my-repertoire" 
                element={<MyRepertoire />} 
              />

            <Route 
                path="/login" 
                element={<Login />} 
              />
            
              <Route 
                path="/create-account" 
                element={<CreateAccount />} 
              />
        
            </Routes>
          </div>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
