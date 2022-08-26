import styles from './SideBar.module.css';
import { Input} from '@chakra-ui/react';
import {motion} from 'framer-motion';

const SideBar=()=>{
    return(
     <div className={styles.sidebar}>
        <div>
        <div className={styles.sidebarOptions}> 
          <a className={styles.option}>
            <Input w='80%' style={{marginTop:'15%'}} variant='outline' placeholder='Search' _placeholder={{color:'whitesmoke'}} />
        

          </a>
        </div>

        <div className={styles.sidebarOptions}>
        <motion.a whileHover={{scale:1.2,color:'goldenrod'}} className={styles.option}>Home</motion.a>
        </div>

        <div className={styles.sidebarOptions}>
         <motion.a  whileHover={{scale:1.2,color:'goldenrod'}} className={styles.option}>Watchlist</motion.a>
        </div>

        <div className={styles.sidebarOptions}>
         <motion.a whileHover={{scale:1.2,color:'goldenrod'}} className={styles.option}>Genre</motion.a>
        </div>
        </div>

        <div className={styles.sidebarOptions}>
        <motion.a  whileHover={{scale:1.4,color:'goldenrod'}} className={styles.option}>FAQ</motion.a>
        </div>
     </div>
    )
}

export default SideBar;
