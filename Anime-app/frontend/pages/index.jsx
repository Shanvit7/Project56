import styles from './index.module.css';
import { motion } from 'framer-motion';
import {
  Center,
 } from '@chakra-ui/react';

export default function LandingPage() {
  return (
    <>
    <Center>
       <motion.h1
        className={styles.landingTitle}
        initial={{y:-1000}}
        animate={{y:80}}  
        >
         Welcome to AnimeGraph
       </motion.h1>
    </Center>

    <Center>
    <motion.p 
      className={styles.landingText}
      initial={{x:-1000,opacity:0}}
      animate={{x:1,y:100,opacity:1}}
      transition={{ ease: "easeOut", duration: 2 }}
      >
      We’re all otaku here
    </motion.p>
    </Center>


    </>
  )
}
