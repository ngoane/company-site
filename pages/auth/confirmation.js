import React from 'react';
import Paper  from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

const confirmation = () => {
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
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
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
            Success
          </Typography>
            <Typography variant='body' sx={{
                textAlign: 'center',
                paddingBottom: '4rem',
            }}>You've successfully created an account with us</Typography>

            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: '2%',
            }}>
                
                <Button variant='contained' sx= {{
        width: '30%',
        marginTop: '2rem',
      }}>Login</Button>
      <Button variant='contained' sx= {{
        width: '30%',
        marginTop: '2rem',
        backgroundColor: '#ccc',
      }}>Cancel</Button>
            </Box>
        </Box>
    </Paper>
    </>
  )
}

export default confirmation