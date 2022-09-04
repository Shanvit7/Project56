import { createSlice} from '@reduxjs/toolkit';

const initialState = {
  currentVideoURL: 'maintainence[404]',
  allVideosRecived:[],
  searchVideoStatus:{
    searchedTitle:'',
    videoFound:false,
  },
  
}

export const activitySlice = createSlice({
  name: 'activity',
  initialState,
  reducers: {
      loadVideo:(state,action)=>{
       state.currentVideoURL=action.payload;
      },
      storeAllvideos:(state,action)=>{
        state.allVideosRecived = action.payload;
      },
      searchVideos:(state,action)=>{
        state.searchVideoStatus.searchedTitle=action.payload;
        state.searchVideoStatus.videoFound =  state.allVideosRecived.find((video)=>{
          if(video.title===action.payload){
            return video
          }
        })

      },
      resetSearch:(state,action)=>{
         state.searchVideoStatus.searchedTitle=''
      }
       
  },

})

export const { loadVideo, storeAllvideos,searchVideos,resetSearch } = activitySlice.actions

export default activitySlice.reducer;