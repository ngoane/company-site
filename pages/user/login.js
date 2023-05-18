import { Typography, Box, Stack } from '@mui/material';
import React from 'react';

import SigninTitle from '@/components/user/SigninTitle';
import SigninForm from '@/components/user/SigninForm';
import Image from 'next/image';

function Login() {
  return (
    <>
   
   
    <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
        margin: '10rem auto',
        gap: '5rem',
    }}>
        <Stack sx={{ width: '100%' }}>
        <SigninTitle title="Sign In Here" question="Don't have an Account?" cta="Register"/>
            <Box sx={{
                width: '80%',
            }}>
                <SigninForm />
            </Box>
        </Stack>
        <Stack sx={{
            width: '40%',
            alignContent: 'center',
        }}>
            <Image src='/img/login_register_image.svg' width="600" height='600'/>
        </Stack>
        
    </Box>

    {/* <Box
      sx={{
        width: '80%',
        margin: '3rem auto', // Center horizontally and add margin top/bottom
        display: 'flex',
        gap: '5rem',
      }}
    > */}
        
      {/* <section className="loginImage" sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItem: 'center',
      }}>
        
      </section> */}
    {/* </Box> */}

    </>
  );
}

export default Login;
