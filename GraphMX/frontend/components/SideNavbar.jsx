import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Center,
    VStack,
    Input,
} from '@chakra-ui/react';
import style from './stylesheets/SideNavbar.module.scss';
import {useState} from 'react';
import { searchVideos } from '../slices/activitySlice';
import {useDispatch} from 'react-redux';
import { resetSearch } from '../slices/activitySlice';


const SideNavbar=({passRef,closeSidebar,isOpenSidebar})=>{
    const [search,setSearch] = useState(false);
    const dispatch = useDispatch();
    const searchVideoHandle = (e) =>[
        dispatch(searchVideos(e.target.value))
      ]

    return(
    <Drawer
    isOpen={isOpenSidebar}
    placement='left'
    onClose={closeSidebar}
    finalFocusRef={passRef}
    size={'lg'}
  >
    <DrawerOverlay/>
    <DrawerContent  style={{backgroundColor:"#1a151e"}}>
      <DrawerCloseButton onClick={()=>setSearch(false)}  />
      <DrawerHeader style={{backgroundColor:"blue",color:"whitesmoke"}}>
      <Center>
        GraphMX {`(Alpha)`}
        </Center>
      </DrawerHeader>

      <DrawerBody>

        <VStack spacing={'5vh'}>
        <Center style={{marginTop:'5%',width:'70%'}}>
          {search?
          (<Input 
             variant={'flushed'}
             placeholder={'Search'} 
             className={style.search} 
             onChange={searchVideoHandle}
          />)
          :
          (<div className={style.sidebar_options}  onClick={()=>setSearch(true)} >Search</div>)
          }
        </Center>
        <Center>
          <div
           className={style.sidebar_options}
           onClick={()=>{dispatch(resetSearch());closeSidebar()}}
           >
            Home
          </div>
        </Center>

        <Center>
          <div className={style.sidebar_options}>My Watchlist</div>
        </Center>

        <Center>
           <div className={style.sidebar_options}>FAQ</div>
        </Center>
        </VStack>

      
      </DrawerBody>

      <DrawerFooter className={style.sidebar_footer}>
     </DrawerFooter>

     </DrawerContent>
    </Drawer>
    )

}

export default SideNavbar;