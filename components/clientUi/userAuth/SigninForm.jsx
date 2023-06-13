import { Box, Button, Link, TextField, Typography, Divider, Icon, OutlinedInput, InputAdornment, IconButton, Visibility, VisibilityOff, Stack } from '@mui/material'
import * as React from 'react'
import { Google, Facebook } from '@mui/icons-material'
import { useState } from 'react'


function SigninForm() {
  const [user, setUser] = useState({email: '', password: ''});
  const setEmail = (e) => {
    setUser((values) => ({...values, email: e.target.value}));
  }
  const setPassword = (e) => {
    setUser((values) => ({...values, password: e.target.value}));
  }

  return (
    <div>
      <Box sx={{ 
        display: "flex",
        flexDirection: "column",
        gap: "1.2rem",
        width: '100%',
        
        }}>
        <TextField label="Email Address"  sx={{ backgroundColor: 'white'}} value={user.email} onChange={setEmail}/>
        <TextField type="password" label="Password" sx={{ backgroundColor: 'white'}} value={user.password} onChange={setPassword}/>
        <Link href="#" underline='none' sx={{
          textAlign: 'right',
        }}>FORGOT PASSWORD?</Link>
        
      </Box>
      <Button variant='contained' sx= {{
        width: '100%',
        marginTop: '2rem',
      }} onClick={ () => console.log(user)}>Sign In</Button>

      <Box sx={{
        margin: '3rem 0',
      }}>
      <Divider orientation="horizontal" flexItem>
          OR
        </Divider>
      </Box>
      <Stack sx={{
        display: 'flex',
        flexDirection: 'row',
        gap: '2%',
      }}>
        <Button
          size='large'
          variant='outlined'
          onClick={() => {
            // TODO
          }}

          sx={{
            width: '49%',
            padding: '0.85rem 0',
            backgroundColor: 'white',
          }}
        ><Icon>
          <Google/>
        </Icon>
          Sign In with Google
        </Button>
        <Button
          size='large'
          variant='outlined'
          onClick={() => {
            // TODO
          }}

          sx={{
            width: '49%',
            padding: '0.85rem 0',
            backgroundColor: 'white',
          }}
        ><Icon>
          <Facebook/>
        </Icon>
          Sign In with Facebook
        </Button>
      </Stack>
    </div>
  )
}

export default SigninForm