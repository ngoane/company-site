import React from 'react';
import Paper  from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { CustomButton } from '@/styles/globalComponentsStyle';

const reset_password = () => {
  return (
    <>
    <Paper sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
        <Stack sx={{ width: '50%', backgroundColor: '#FFFFFF', height: '100vh', display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '1rem',
            alignItems: 'center', }}>
        <Image src="/user/Reset_Password_Illustration.svg" width="600" height="600" />
        </Stack>
        <Stack sx={{ width: '50%', backgroundColor: '#9138E8', height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '1rem',
            alignItems: 'center',
        }}>
            <Typography variant='headerMainBold' component='h2' sx={{ color: 'white'}}>Reset Password</Typography>
            <Typography sx={{ color: 'white', width: '55%'}}>No problem! Just enter the email you registered with
to reset your password</Typography>
            <TextField
            label="Enter New Password"
            sx={{ backgroundColor: "white", width: "48%" }}
          />
          <TextField
            label="Confirm New Password"
            sx={{ backgroundColor: "white", width: "48%" }}
          />
          <Button
        size="large"
        variant="contained"
        sx={{
          width: "50%",
          marginTop: "1rem",
          backgroundColor: 'accentPink'
        }}
      >
        Reset Password
      </Button>
        </Stack>
    </Paper>
    
    </>
  )
}

export default reset_password