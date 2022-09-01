import {useRouter} from 'next/router';
import { Center,Box,Input,Button} from '@chakra-ui/react';
import { useForm } from "react-hook-form";
import { useDispatch,useSelector } from 'react-redux';
import { 
     Alert,
     AlertIcon,
     AlertDescription,
 } from '@chakra-ui/react';
import style from './stylesheets/login.module.scss';
import Link from 'next/link';
import { loginProfile } from '../slices/authSlice';
import { useState } from 'react';

const Login=()=>{
    const router = useRouter();
    const [loginFailed,setLoginFailed] = useState(false);
    const loginStatus = useSelector(state=>state.authorization.loginStatus);
    const isLoggedin = useSelector(state=>state.authorization.isLoggedin);
    const dispatch = useDispatch();
    const { register, handleSubmit, formState: { errors } } = useForm();

    if(isLoggedin){
        router.push('/MainPage');
    }
    
    const onSubmit = data => {
     dispatch(loginProfile(data));
     setLoginFailed(!isLoggedin);
    }
   
    return(
        <Center  className={style.login_page}>
            <form onSubmit={handleSubmit(onSubmit)}>
            <Box className={style.login_box}>

            <Center>
                <div className={style.login_title}>Login</div>
            </Center>

           {(loginFailed) &&
            <Center>
                <Alert status={loginStatus==='Incorrect Password!'?
                `error`:(loginStatus==='Login successful')?
                `success`:`warning`}>
                    <AlertIcon/>
                    <AlertDescription>{loginStatus}</AlertDescription>
                </Alert>
            </Center>
            }

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