import {gql,GraphQLClient} from 'graphql-request';
import ReactPlayer from 'react-player';
import React from 'react';
import { useRouter } from 'next/router';
import {useDispatch,useSelector} from 'react-redux';
import { loadVideo } from '../slices/activitySlice';
import { useState } from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Center,
  useDisclosure,
  VStack,
  Input
} from '@chakra-ui/react'
import style from './stylesheets/mainpage.module.scss';
import TopNavbar from '../components/TopNavbar';

export const getStaticProps = async ()=>{
    const url = process.env.ENDPOINT;
    const graphQLClient = new GraphQLClient(url,
      {headers:{
        "Authorization":process.env.GRAPH_CMS_TOKEN
      }}
    )
  
  const query = gql`
  query{
    videos{
      createdAt,
      id,
      title,
      description,
      seen,
      slug,
      tags,
      thumbnail{
        url
      },
      mp4{
        url
      }
    }
  }
  `
  
  const data = await graphQLClient.request(query);
  const videos = data.videos;
  
  return{
    props:{
      videos,
    }
  }
  }
  

const MainPage=({videos})=>{
    const router = useRouter();
    const dispatch = useDispatch();
    const isLoggedin = useSelector(state=>state.authorization.isLoggedin);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [search,setSearch] = useState(false);
    const btnRef = React.useRef();
    if(!isLoggedin){
      router.push('/Login');
    }

    return(<>
      {  (isLoggedin) &&
      <div className={style.main_page}>
        <TopNavbar passRef={btnRef}  openSideBar={onOpen} />
        <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
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
              (<Input variant={'flushed'} placeholder={'Search'}  className={style.search} />)
              :
              (<div className={style.sidebar_options}  onClick={()=>setSearch(true)} >Search</div>)
              }
            </Center>
            <Center>
              <div className={style.sidebar_options}>Home</div>
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
            <Center>
             
            </Center>
          </DrawerFooter>
         

        </DrawerContent>
      </Drawer>

     
      <div className={style.player_list_header}>
        New Releases
      </div>
    
      <div className={style.player_list}>
      {
      videos.map((video,key)=>
      (<div className={style.player_wrapper} key={key}>
      <ReactPlayer
      url={video.mp4.url}
      playing={false}
      light={video.thumbnail.url}
      width={'100%'}
      height={'100%'}
      key={key}
      onClick={()=>{dispatch(loadVideo(video.mp4.url));router.push('/Player')}}
      /> 
      <Center>
      <div className={style.player_title} key={key}>{video.title}</div>
      </Center>
      </div>)
      )}
      </div>




      </div>
       }
      </>)
}

export default MainPage;