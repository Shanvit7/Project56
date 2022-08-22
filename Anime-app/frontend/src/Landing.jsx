import { useQuery, gql } from '@apollo/client';
import {
  Center,
  Button
 } from '@chakra-ui/react';
import {ArrowForwardIcon} from '@chakra-ui/icons';
import { motion } from 'framer-motion';
import './stylesheets/landing.scss';

const GET_GREETING = gql`query { appName }`;

const LandingPage=()=>{

    const { loading, error, data } = useQuery(GET_GREETING);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :</p>;
    return(
        <div className='landing-page-wrapper'>

          <Center>
           <motion.h1
           initial={{y:-1000}}
           animate={{y:40}}    
          >
          {data.appName}
           </motion.h1>
          </Center>

          <Center>
            <motion.p 
            initial={{x:-1000,opacity:0}}
            animate={{x:60,y:60,opacity:1}}
            transition={{ ease: "easeOut", duration: 2 }}
             >
              We’re all otaku here
            </motion.p>
          </Center>

          <Center>
            <motion.h3
            className='page-text'
            initial={{opacity:0}}
            animate={{y:100,opacity:1}}
            transition={{duration:3}}
            >
              Over 1000 + animes listed
            </motion.h3>
          </Center>
       
          <Center>
            <motion.div 
             initial={{y:-1000}}
             animate={{y:300}}
            >
            <Button
            className='btn-mod'
            >
              <ArrowForwardIcon/>
            </Button>
            </motion.div>
         </Center>
    

        </div>
    )
}

export default LandingPage;