import React from 'react';
import Paper  from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';


const forgot_password = () => {
  return (
    <>
    <Paper sx={{
        display: 'flex',
        width: '50vw',
        height: '65vh',
        margin: '10rem auto'
    }}>
        <Box sx={{
            margin: '5rem auto',
        }}>
            <Typography
            variant="headerHuge"
            component="h2"
            color="#9138e8"
            sx={{
              width: "100%",
              marginBottom: "1rem",
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            Forgot Password?
          </Typography>
            <Typography variant='title' sx={{
                textAlign: 'center',
                paddingBottom: '4rem',
            }}>Don't Worry, We can help you reset</Typography>

            <div>
                <TextField label="Enter your Email Address" sx= {{
        width: '100%',
      }} />
                <Button variant='contained' sx= {{
        width: '100%',
        marginTop: '2rem',
      }}>Reset</Button>
            </div>
        </Box>
    </Paper>
    </>
  )
}

export default forgot_password