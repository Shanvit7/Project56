import ReactPlayer from "react-player";
import { useSelector} from "react-redux";


const Player =()=>{
    const videoURL = useSelector(state=>state.activity.loadVideoURL);
    return(
        <ReactPlayer url={videoURL}  width='100vw' height='50vh' playing={true} controls/>
    )
}

export default Player;