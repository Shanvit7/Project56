import {GraphQLClient} from 'graphql-request';
import ReactPlayer from 'react-player';
import {useEffect,useRef} from 'react';
import { useRouter } from 'next/router';
import {useDispatch,useSelector} from 'react-redux';
import { loadVideo } from '../slices/activitySlice';
import {
  Center,
  useDisclosure,
  Spinner,
} from '@chakra-ui/react'
import style from './stylesheets/mainpage.module.scss';
import TopNavbar from '../components/TopNavbar';
import { getAllvideos } from '../queries';
import { storeAllvideos } from '../slices/activitySlice';
import SideNavbar from '../components/SideNavbar';

export const getStaticProps = async ()=>{

    const url = process.env.ENDPOINT;
    const graphQLClient = new GraphQLClient(url,
      {headers:{
        "Authorization":process.env.GRAPH_CMS_TOKEN
      }}
    )
  
   const query = getAllvideos;
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
    useEffect(()=>{
      dispatch(storeAllvideos(videos));
    },[videos]);
    const isLoggedin = useSelector(state=>state.authorization.isLoggedin);
    const { isOpen,onClose,onOpen } = useDisclosure();
    const btnRef = useRef();
    if(!isLoggedin){
      router.push('/Login');
    }

    return(<>
      {  (isLoggedin) &&
      <div className={style.main_page}>

        <TopNavbar passRef={btnRef}  openSideBar={onOpen} />
        <SideNavbar passRef={btnRef} isOpenSidebar={isOpen} closeSidebar={onClose} />

      <div className={style.player_list_header}>
        New Releases
      </div>
    
      <div className={style.player_list}>
      {
      videos.map((video,key)=>
      (<div className={style.player_wrapper} key={key}>
      {(!video.mp4.url)?
      <Center>
        <Spinner 
        size='xl' 
        color='blue.500'
        thickness='5px'
        speed='0.6s'
        /> 
      </Center>
      :
      (<ReactPlayer
      url={video.mp4.url}
      playing={false}
      light={video.thumbnail.url}
      width={'100%'}
      height={'100%'}
      key={key}
      onClick={()=>{dispatch(loadVideo(video.mp4.url));router.push('/Player')}}
      />)
      } 
      <Center>
      <div className={style.player_title} key={key}>{video.title || 'Loading...'}</div>
      </Center>
      </div>)
      )}
      </div>

      </div>
       }
      </>)
}

export default MainPage;