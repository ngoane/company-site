import { Box, Button, Link, TextField, Typography, Divider, Icon, OutlinedInput, InputAdornment, IconButton, Visibility, VisibilityOff, Stack } from '@mui/material'
import * as React from 'react'
import { Google, Facebook } from '@mui/icons-material'
import { useState } from 'react'
import { useRouter } from 'next/router';
import { signIn } from 'next-auth/react'



function SigninForm() {
  const router = useRouter();
  const [user, setUser] = useState({email: '', password: ''});
  const setEmail = (e) => {
    setUser((values) => ({...values, email: e.target.value}));
  }
  const setPassword = (e) => {
    setUser((values) => ({...values, password: e.target.value}));
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await signIn('credentials', { redirect: false, email: user.email, password: user.password });
    console.log(res);
    if (res && !res.ok) {
      return { error: true, message: 'Invalid credential'};
    }
    router.push('/user');
  }

  return (
    <form onSubmit={handleLogin}>
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
      <Button variant='contained' type='submit' sx= {{
        width: '100%',
        marginTop: '2rem',
      }}>Sign In</Button>

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
    </form>
  )
}

export default SigninForm