import React from 'react';
import ReactDOM from 'react-dom/client';
import LandingPage from './Landing';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { InMemoryCache, ApolloClient, ApolloProvider} from '@apollo/client';
import { ChakraProvider,extendTheme } from '@chakra-ui/react';

const client = new ApolloClient({
    uri: 'http://localhost:8080/graphql',
    cache: new InMemoryCache(),
});

const theme = extendTheme({
  styles:{
      global:()=>({
          body:{
              bg:'#1A1428'
          }
      })
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
    <ApolloProvider client={client}>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<LandingPage/>} />
        </Routes>
    </BrowserRouter>,
    </ApolloProvider>
    </ChakraProvider>
  </React.StrictMode>
);
