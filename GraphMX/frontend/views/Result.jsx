import style from '../pages/stylesheets/mainpage.module.scss';
import {useSelector,useDispatch} from 'react-redux';
import { useEffect } from 'react';
import { storeAllvideos } from '../slices/activitySlice';
import { Center } from '@chakra-ui/react';
import { loadVideo } from '../slices/activitySlice';
import ReactPlayer from 'react-player';

const Result =({videos,router})=>{
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(storeAllvideos(videos));
    },[videos]);
    const {searchedTitle, videoFound } = useSelector(state=>state.activity.searchVideoStatus);
    return(
       <>
       <div className={style.player_list_header}>
        Showing results for {`"${searchedTitle}"`}
       </div>

       <div className={style.player_list}>
       <div className={style.player_wrapper}>
        {videoFound?
        (<>

            <ReactPlayer
                url={videoFound.mp4.url}
                playing={false}
                light={videoFound.thumbnail.url}
                width={'100%'}
                height={'100%'}
                onClick={()=>{dispatch(loadVideo(videoFound.mp4.url));router.push('/Player')}}
            />
 
            <Center>
              <div className={style.player_title}>{videoFound.title || 'Loading...'}</div>
            </Center>

       </> )
       :

       (<Center style={{color:'whitesmoke',fontSize:'25px',width:'25vw'}}>
        No videos found for the given title. 
        </Center>)
    }
       </div>
       </div>
    

       </>
    )
}
;

export default Result;