import { Typography, Box, Stack } from '@mui/material';
import React from 'react';

import SigninTitle from '@/components/user/SigninTitle';
import RegisterForm from '@/components/user/RegisterForm';
import Image from 'next/image';

function register() {
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
        <Stack sx={{ width: '60%'}}>
        <SigninTitle title="Register an Account" question="Already have an Account?" cta="Sign In" />
            <Box sx={{
                width: '80%',
            }}>
                <RegisterForm />
            </Box>
        </Stack>
        <Stack sx={{
            width: '40%',
            alignContent: 'center',
        }}>
            <Image src='/img/login_register_image.svg' width="600" height='600'/>
        </Stack>
        
    </Box>

    </>
  )
}

export default register