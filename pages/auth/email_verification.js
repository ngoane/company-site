import React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Link from 'next/link';
import Image from 'next/image';

const email_verification = () => {
    return (
        <>
            <Stack sx={{
                display: 'flex',
                width: '70vw',
                margin: '5rem auto',
                flexDirection: 'column',
                justifyContent: 'center',
            }}>
                <Box sx={{
                    margin: '5rem auto',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            textAlign: 'center',
                            alignItems: 'center',
                }}>
                    <Typography
                        variant="headerHuge"
                        component="h2"
                        color="#9138e8"
                        sx= {{
                        }}
                    >
                    Email Verification
                    </Typography>
                    
                    <Box sx={{
                        marginTop: '-4rem',
                        marginBottom: '-3rem',
                    }}>
                    <Image src='/user/Email_Verification_Illustration.svg' width='500' height='500'  />
                    </Box>
                    
                    <Typography variant='body' sx={{
                        textAlign: 'center',
                        paddingBottom: '4rem',
                        lineHeight: '2',
                    }}>
                        Hi, Lawrence! A link is sent to <Link href='#'>lawrence@ngoane.com</Link> <br />
                        Please verify your email address by clicking the button below to start using our service
                    </Typography>

                    <Box sx={{
                        width: '100%'
                    }}>

                        <Button variant='contained' sx={{
                            width: '100%',
                        }}>Verify Email</Button>
                    </Box>
                </Box>
            </Stack>
        </>
    )
}

export default email_verification