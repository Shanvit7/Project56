import ReactPlayer from "react-player";
import { Center } from "@chakra-ui/react";
import { useSelector} from "react-redux";


const Player =()=>{
    const videoURL = useSelector(state=>state.activity.loadVideoURL);
    return(
     <Center>
        <ReactPlayer  url={videoURL}  width='100vw' height='50vh' playing={true} controls/>
     </Center>
    )
}




export default Player;