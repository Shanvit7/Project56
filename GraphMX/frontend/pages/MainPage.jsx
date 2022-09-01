import {gql,GraphQLClient} from 'graphql-request';
import ReactPlayer from 'react-player'
import { useRouter } from 'next/router';
import {useDispatch} from 'react-redux';
import { loadVideo } from '../slices/activitySlice';
import { Center } from '@chakra-ui/react';


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
    return(
      <Center style={{color:'whitesmoke'}}>
      All video content will be delivered here
      </Center>
    )
}

export default MainPage;