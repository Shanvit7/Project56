import '../styles/globals.css';
import { ChakraProvider,extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles:{
      global:()=>({
          body:{
              bg:'#1A1428'
          }
      })
  }
})


function MyApp({ Component, pageProps }){
  return( 
  <ChakraProvider theme={theme}>
    <Component {...pageProps} />
  </ChakraProvider>
  )
}

export default MyApp
