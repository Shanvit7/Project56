import {GraphQLClient} from 'graphql-request';
import {useRef} from 'react';
import { useRouter } from 'next/router';
import {useSelector} from 'react-redux';
import {
  useDisclosure,
} from '@chakra-ui/react'
import style from './stylesheets/mainpage.module.scss';
import TopNavbar from '../components/TopNavbar';
import { getAllvideos } from '../queries';
import SideNavbar from '../components/SideNavbar';
import HomePage from '../views/HomePage';
import Result from '../views/Result';

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
    const isLoggedin = useSelector(state=>state.authorization.isLoggedin);
    const isSearching = useSelector(state=>state.activity.searchVideoStatus.searchedTitle);
    const { isOpen,onClose,onOpen } = useDisclosure();
    const router = useRouter();
    const btnRef = useRef();
    if(!isLoggedin){
      router.push('/Login');
    }

    return(<>
      {  (isLoggedin) &&
      <div className={style.main_page}>

        <TopNavbar passRef={btnRef}  openSideBar={onOpen} />
        <SideNavbar passRef={btnRef} isOpenSidebar={isOpen} closeSidebar={onClose} />
        {
          (isSearching==='')?
            <HomePage videos={videos} router={router} />
            :
            (<Result videos={videos} router={router} />)
        }
        </div>
      }
        </>
        )

}

export default MainPage;