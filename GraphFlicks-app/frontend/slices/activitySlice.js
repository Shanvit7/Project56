import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loadVideoURL: 'safe',
}

export const activitySlice = createSlice({
  name: 'activity',
  initialState,
  reducers: {
      loadVideo:(state,action)=>{
       state.loadVideoURL=action.payload;
      }
  },
})

// Action creators are generated for each case reducer function
export const { loadVideo } = activitySlice.actions

export default activitySlice.reducer