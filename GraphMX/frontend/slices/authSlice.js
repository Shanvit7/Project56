import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    isLoggedin:false,
}

export const authSlice = createSlice({
  name: 'authorization',
  initialState,
  reducers: {
    registerProfile:(state,action)=>{
        axios.post('/api/registerUser',{
            name:action.payload.name,
            email:action.payload.email,
            password:action.payload.password,
        })
    },

    validateProfile:(state,action)=>{
      if(action.payload.data.password===action.payload.formData.password){
        state.isLoggedin=true;
      } else{
        state.isLoggedin=false;
      }
    }
  }
    
})

// Action creators are generated for each case reducer function
export const {registerProfile,validateProfile} = authSlice.actions

export default authSlice.reducer