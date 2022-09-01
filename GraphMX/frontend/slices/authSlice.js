import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const loginProfile = createAsyncThunk(
  'authorization/loginProfile',
  async(thunkAPI)=>{
    const response = await axios.get('api/loginUser',{params:{name:thunkAPI.name}});
    if(response.data.password===thunkAPI.password){
      return true;
    } else{
      return false;
    }
  }
)

const initialState = {
    isLoggedin:false,
    loginStatus:'',
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

  },

  extraReducers:(builder)=>{
    builder
    .addCase(loginProfile.fulfilled,(state,action)=>{
      if(action.payload){
      state.isLoggedin=true;
      state.loginStatus='Login successful'
      }else{
        state.isLoggedin=false;
        state.loginStatus='Incorrect Password!'
      }
    })

    .addCase(loginProfile.rejected,(state,action)=>{
      state.isLoggedin=false;
      state.loginStatus='User not found!'
    })
  }
    
})

export const {registerProfile} = authSlice.actions;

export default authSlice.reducer;