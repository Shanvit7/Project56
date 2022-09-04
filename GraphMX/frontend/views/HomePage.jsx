import ReactPlayer from 'react-player';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import { loadVideo } from '../slices/activitySlice';
import { storeAllvideos } from '../slices/activitySlice';
import style from '../pages/stylesheets/mainpage.module.scss';
import { Center } from '@chakra-ui/react';



const HomePage =({videos,router})=>{
    const dispatch = useDispatch();
     useEffect(()=>{
       dispatch(storeAllvideos(videos));
     },[videos]);
 
 return(
   <>
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
 
 
   </>
 )
 }
 
export default HomePage;