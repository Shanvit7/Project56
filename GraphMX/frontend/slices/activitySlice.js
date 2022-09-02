import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loadVideoURL: 'maintainence[404]',
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

export const { loadVideo } = activitySlice.actions

export default activitySlice.reducer