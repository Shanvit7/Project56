import style from './stylesheets/signup.module.scss';
import { Center,Box,Input,Button } from '@chakra-ui/react';
import Link from 'next/link';

const SignupPage=()=>{
    return(
       <Center className={style.signup_page}>
        <Box className={style.signup_box}>
            <Center><div className={style.signup_title}>Signup</div></Center>
            <Center><Input className={style.signup_input}  type='text' variant='flushed' placeholder='Name'/></Center>
            <Center><Input className={style.signup_input}  type='email' variant='flushed' placeholder='Email'/></Center>
            <Center><Input className={style.signup_input}  type='password' variant='flushed' placeholder='Password'/></Center>
            <Center><Input className={style.signup_input}  type='password'  variant='flushed' placeholder='Confirm Password'/></Center>
            <Center><Button className={style.signup_btn}>Create Account</Button></Center>
            <Center className={style.signup_link}><Link  href='/'>Already have an account?</Link></Center>
        </Box>
       </Center>
    )
}

export default SignupPage;