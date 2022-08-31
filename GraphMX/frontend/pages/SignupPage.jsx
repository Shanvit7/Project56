import style from './stylesheets/signup.module.scss';
import { Center,Box,Input,Button} from '@chakra-ui/react';
import Link from 'next/link';
import { useForm } from "react-hook-form";
import {useState} from 'react'
import axios from 'axios';

const SignupPage=()=>{
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [errorPassword,setErrorPassword] = useState(false);

    const registerUser=(formData)=>{
        console.log(formData);
        axios.post('/api/registerUser',{formData});
    }

    const onSubmit = data => {
        if(data.password!==data.confirmPassword){
            setErrorPassword(true);
        }else{
            setErrorPassword(false);
            delete data['confirmPassword']
            registerUser(data);
        }
    };
   
    return(
       <Center className={style.signup_page}>
        <form onSubmit={handleSubmit(onSubmit)}>
        <Box className={style.signup_box}>

            <Center>
                <div className={style.signup_title}>Signup</div>
            </Center>

            <Center>
             <Input
              {...register("name",{required:true})} 
              className={style.signup_input}  
              type='text' 
              variant='flushed' 
              placeholder='Name'
              />
            </Center>
            {errors.name?.type === 'required' && 
                <p className={style.signup_error}>Please enter your name !</p>
            }

            <Center>
             <Input
                {...register("email",{required:true})} 
                className={style.signup_input} 
                type='email'
                variant='flushed'
                placeholder='Email (eg: Joe@mail.com)'
               />
            </Center>
            {errors.email?.type === 'required' && 
                <p className={style.signup_error}>Please enter your email !</p>
            }

            <Center>
                <Input 
                 {...register("password",{required:true,minLength:8})} 
                  className={style.signup_input}
                   type='password' 
                   variant='flushed' 
                   placeholder='Password'
                   />
           </Center>
           {(errors.password?.type === 'required') || (errors.password?.type ==='minLength')
            && 
                <p className={style.signup_error}>Password is required ( Minimum 8 characters) !</p>
           }



            <Center>
                <Input
                 {...register("confirmPassword",{required:true,minLength:8})} 
                   className={style.signup_input}
                   type='password'
                   variant='flushed' 
                   placeholder='Confirm Password'
                   />
            </Center>
            {(errors.confirmPassword?.type === 'required') || (errors.password?.type ==='minLength')
             && 
             <p className={style.signup_error}>Please re-enter the password !</p>
            }
            {errorPassword?<p className={style.signup_error}>Passwords do not match ( Minimum 8 characters) !</p>:''}
            

            <Center><Button  type='submit'className={style.signup_btn} >Create Account</Button></Center>
            <Center className={style.signup_link}><Link  href='/'>Already have an account?</Link></Center>

        </Box>
        </form>
       </Center>
    )
}

export default SignupPage;