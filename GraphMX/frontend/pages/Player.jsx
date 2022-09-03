import ReactPlayer from "react-player";
import { useSelector} from "react-redux";
import { Center } from "@chakra-ui/react";
import style from './stylesheets/player.module.scss';



const Player =()=>{
    const videoURL = useSelector(state=>state.activity.loadVideoURL);
    return(
        <>
        <ReactPlayer 
        url={videoURL} 
        width={'100vw'} 
        height={'60vh'} 
        playing={true} 
        controls={true}
        className={style.react_player}
        />
        <Center style={{color:'whitesmoke'}}>More content will come here</Center>
        </>
    )
}

export default Player;