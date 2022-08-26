import SideBar from "../components/SideBar";
import {gql,GraphQLClient} from 'graphql-request';
import {Center} from '@chakra-ui/react';
import {motion} from 'framer-motion';
import ReactPlayer from 'react-player'
import { useRouter } from 'next/router';
import {useDispatch} from 'react-redux';
import { loadVideo } from '../slices/activitySlice';


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
    console.log(videos);
    return(
    <div style={{display:'flex'}}>
     <SideBar />

     <div style={{display:'flex',justifyContent:'space-around',width:'100%',marginTop:'5%',flexWrap:'wrap'}}>
        

         {videos.map(video=>
         <motion.div 
         style={{height:'fit-content'}}
         whileHover={{opacity:0.5}}
         >
          <ReactPlayer 
          url={video.mp4.url} 
          light={video.thumbnail.url} 
          height='25vh' 
          width='20vw'
          onClickPreview={()=>{router.push('Player');dispatch(loadVideo(video.mp4.url))}}
          />
          <Center>
            
          <div style={{color:'whitesmoke'}}>{video.title}</div>
          
          </Center>
          </motion.div>
        )}

      </div>

     </div>
    )
}

export default MainPage;