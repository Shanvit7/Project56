import {useRouter} from 'next/router';
import { Center,Box,Input,Button} from '@chakra-ui/react';
import { useForm } from "react-hook-form";
import { useDispatch,useSelector } from 'react-redux';
import style from './stylesheets/login.module.scss';
import Link from 'next/link';
import axios from 'axios';
import { validateProfile } from '../slices/authSlice';


const Login=()=>{
    const router = useRouter();
    const dispatch = useDispatch();
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const onSubmit = data => {
       axios.get('api/loginUser',{params:{name:data.name}}).then((res)=>{
        dispatch(validateProfile({data:res.data,formData:data}));
       })
    }
   
    return(
        <Center  className={style.login_page}>
            <form onSubmit={handleSubmit(onSubmit)}>
            <Box className={style.login_box}>

            <Center>
                <div className={style.login_title}>Login</div>
            </Center>

            <Center>
             <Input
              {...register("name",{required:true})} 
              className={style.login_input}  
              type='text' 
              variant='flushed' 
              placeholder='Name'
              />
            </Center>
            {errors.name?.type === 'required' && 
                <p className={style.login_error}>Please enter your name !</p>
            }

            <Center>
                <Input 
                 {...register("password",{required:true,minLength:8})} 
                  className={style.login_password}
                   type='password' 
                   variant='flushed' 
                   placeholder='Password'
                   />
           </Center>
           {(errors.password?.type === 'required') || (errors.password?.type ==='minLength')
            && 
                <p className={style.login_error}>Password is required ( Minimum 8 characters) !</p>
           }

            <Center><Button type='submit'className={style.login_btn}>Login</Button></Center>
            <Center className={style.login_link}><Link href='/Signup'>Don't have an account?</Link></Center>

            </Box>
            </form>
        </Center>
    )
}

export default Login;