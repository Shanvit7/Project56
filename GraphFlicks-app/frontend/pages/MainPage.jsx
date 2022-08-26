import SideBar from "../components/SideBar";


const MainPage=()=>{
    return(
    <div style={{display:'flex'}}>
     <SideBar pageWrapId={'page-wrap'} outerContainerId={'outer-container'}/>
     <div style={{color:'whitesmoke'}}>Welcome</div>
     </div>
    )
}

export default MainPage;