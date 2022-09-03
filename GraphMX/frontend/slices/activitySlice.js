import { createSlice} from '@reduxjs/toolkit';

const initialState = {
  currentVideoURL: 'maintainence[404]',
  allVideosRecived:[],
  searchVideo:'Initial',
  
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
        state.allVideosRecived.filter((video)=>{
          if(video.title===action.payload){
            state.searchVideo = video
          } else{
            state.searchVideo = 'Not found 404'
          }
        })
      }
  },

})

export const { loadVideo, storeAllvideos,searchVideos } = activitySlice.actions

export default activitySlice.reducer;