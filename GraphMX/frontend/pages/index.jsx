import { useRouter } from 'next/router';
import { useEffect, useState } from "react";
import { Center ,chakra} from '@chakra-ui/react';
import axios from 'axios';
import { motion, isValidMotionProp } from 'framer-motion';
import styles from './stylesheets/landing.module.scss';


export default function LandingPage(){
  const router = useRouter();
  const [title,setTitle] =  useState();
  useEffect(() => {
    (async () => {
        axios.get("/api/list").then((res)=>{
          setTitle(res.data[0].title);
        })
     
    })();
}, []);

  const insertData =()=>{
   axios.post('/api/insert',{})
  }

  const LandingButton =  chakra(motion.button,{  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === 'children',});
 
  return (
    <div style={{overflow:'hidden',height:'100vh'}}>
    <Center>
      <motion.h1
      animate={{scale:5}}
      className={styles.landing_title}
      >
         {title}
      </motion.h1>
    </Center>

    <Center>
     <motion.ul 
     className={styles.landing_list}
     animate={{scale:1.1}}
     >
      <li>1000+ movies on demand</li>
      <li>Free content</li>
      <li>Faster than ever</li>
     </motion.ul>
      
    </Center>

    <Center>
      <LandingButton
      className={styles.landing_btn}
      animate={{scale:2}}
      whileHover={{scale:1.8}}
      onTap={()=>router.push('/SignupPage')}
      >
        Get Started
      </LandingButton>
    </Center>


    </div>
  )
}
