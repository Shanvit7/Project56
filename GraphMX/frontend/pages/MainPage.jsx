import {gql,GraphQLClient} from 'graphql-request';
import ReactPlayer from 'react-player';
import React from 'react';
import { useRouter } from 'next/router';
import {useDispatch,useSelector} from 'react-redux';
import { loadVideo } from '../slices/activitySlice';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Center,
  useDisclosure,
  VStack,
} from '@chakra-ui/react'
import {ArrowRightIcon} from '@chakra-ui/icons';
import style from './stylesheets/mainpage.module.scss';

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
    const btnRef = React.useRef();
    if(!isLoggedin){
      router.push('/Login');
    }

    return(<>
      { (isLoggedin) &&
      <div>
        <Button ref={btnRef} colorScheme="messenger" onClick={onOpen}>
          <ArrowRightIcon/>
        </Button>
        <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
        size={'lg'}
      >
        <DrawerOverlay/>
        <DrawerContent  style={{backgroundColor:"#1a151e"}}>
          <DrawerCloseButton />
          <DrawerHeader style={{backgroundColor:"blue",color:"whitesmoke"}}>
          <Center>
            GraphMX (Beta)
            </Center>
          </DrawerHeader>

          <DrawerBody>

            <VStack spacing={'5vh'}>
            <Center style={{marginTop:'5%'}}>
              <div className={style.sidebar_options}>Search</div>
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
      (<div className={style.player_wrapper}>
      <ReactPlayer
      url={true}
      playing={false}
      light={video.thumbnail.url}
      width={'100%'}
      height={'100%'}
      onClick={()=>{dispatch(loadVideo(video.mp4.url));router.push('/Player')}}
      /> 
      <Center>
      <div className={style.player_title}>{video.title}</div>
      </Center>
      </div>)
      )}
      </div>




      </div>
       }
      </>)
}

export default MainPage;