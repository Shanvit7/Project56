import styles from './index.module.css';
import { motion, isValidMotionProp } from 'framer-motion';
import {
  Center,
  chakra,
 } from '@chakra-ui/react';
import {ArrowForwardIcon} from '@chakra-ui/icons'; 

export default function LandingPage(){
  const LandingBox = chakra(motion.div,{ shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === 'children',});
  const LandingStack = chakra(motion.div,{  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === 'children',});
  const LandingButton =  chakra(motion.button,{  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === 'children',});
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
   
    <Center>
    <LandingStack 
    className={styles.landingStack} 
    initial={{y:1000}}
    animate={{y:1}}
    transition={{ ease: "easeOut", duration: 2}}
    >

      <LandingBox
      as={motion.div}
      animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 270, 270, 0],
        borderRadius: ["20%", "50%", "0%", "50%", "20%"],
      }}
      transition={{ 
      ease: "easeOut", 
      duration: 3,
      repeat: Infinity,
      repeatType: "loop",
    }}
      className={styles.landingBox}
      style={{borderColor:'#0D766C'}}
      >
          
      </LandingBox>

      <LandingBox
       as={motion.div}
       animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 270, 270, 0],
        borderRadius: ["20%", "50%", "0%", "50%", "20%"],
      }}
       transition={{
       ease: "easeOut",
       duration: 3,
       repeat: Infinity,
       repeatType: "loop",
      }}
       className={styles.landingBox}
       style={{borderColor:'#B4F8C8'}}
      >
         
      </LandingBox>

      <LandingBox
       as={motion.div}
       animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 270, 270, 0],
        borderRadius: ["20%", "50%", "0%", "50%", "20%"],
      }}
       transition={{ 
         ease: "easeOut",
         duration: 3,
         repeat: Infinity,
         repeatType: "loop",
        }}
       className={styles.landingBox}
       style={{borderColor:'green'}}
      >
       
      </LandingBox>

    </LandingStack>
    </Center>

    <Center>
      <LandingButton
      className={styles.landingButton}
      style={{color:'whitesmoke'}}
      whileHover={{
        scale:1.3,
      }}
      >
        <motion.div
        whileHover={{
          scale:1.2,
          rotate:270
        }}
        whileTap={{
          y:-50,
        }}
        >
          <ArrowForwardIcon className={styles.landingIcon}/>
        </motion.div>
      </LandingButton>
    </Center>


    </>
  )
}
