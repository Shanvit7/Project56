import '../styles/globals.scss';
import { ChakraProvider,extendTheme } from '@chakra-ui/react';
import {useEffect,useState} from 'react';
import { store } from '../store';
import { Provider } from 'react-redux';



const theme = extendTheme({
  styles:{
      global:()=>({
          body:{
              bg:'#000000'
          }
      })
  }
})


function MyApp({ Component, pageProps }){
  const [showing,setShowing] = useState(false);


  useEffect(() => {
    setShowing(true);
  }, []);

  if (!showing) {
    return null;
  }

  if (typeof window === 'undefined') {
    return <></>;
  } else {
  return( 
  <Provider store={store}>
  <ChakraProvider theme={theme}>
    <Component {...pageProps} />
  </ChakraProvider>
  </Provider>
  )
 }

}
export default MyApp;