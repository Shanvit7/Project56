import { Center } from '@chakra-ui/react';
import style from './stylesheets/TopNavbar.module.scss';
import {ArrowRightIcon} from '@chakra-ui/icons';
import { Avatar } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';

const TopNavbar=({passRef,openSideBar})=>{
  return(
    <div className={style.top_navbar}>
      <Center className={style.sidebar}>
        <Button ref={passRef} className={style.sidebar_btn} onClick={()=>openSideBar()} >
         <ArrowRightIcon />
        </Button>
        </Center>
      <Center className={style.title} >GraphMX</Center>
      <Center className={style.avatar}><Avatar name='Random Profile'/></Center>
    </div>
  )
}

export default TopNavbar;