import ReactPlayer from "react-player";
import { useSelector} from "react-redux";
import { Center } from "@chakra-ui/react";


const Player =()=>{
    const videoURL = useSelector(state=>state.activity.loadVideoURL);
    return(
        <>
        <ReactPlayer url={videoURL} width={'100vw'} height={'50vh'} playing={true} controls/>
        <Center style={{color:'whitesmoke'}}>More content will come here</Center>
        </>
    )
}

export default Player;