import { Typography, Stack, Paper, Grid } from '@mui/material';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Image from 'next/image';

const ContactInfo = () => {
  return (
    <Paper elevation={24} sx={{ padding: "5% 10%", marginRight: "10%"}}>
      <Stack spacing={5}>
        <Typography variant='headlineMainBold' color='primary'>Contact Information</Typography>
        <Typography variant='body' sx={{ color: "rgb(112, 109, 112)"}}>You can reach us through the following contact information</Typography>
        <Paper elevation={24} sx={{ padding: "2%"}}>
          <Grid container>
            <Grid item xs={4}>
              <Image
                src='/contact/phone.svg'
                height={64}
                width={64}
                alt='Phone icon'
              />
            </Grid>
            <Grid item xs={8}>
              <Typography variant='titleBold'>Phone</Typography>
              <Typography variant='body'>+233 (0) 24 000 0000</Typography>
            </Grid>
          </Grid>
        </Paper>
        <Paper elevation={24} sx={{ padding: "2%"}}>
          <Grid container>
            <Grid item xs={4}>
              <Image
                src='/contact/location.svg'
                height={64}
                width={64}
                alt='Location icon'
              />
            </Grid>
            <Grid item xs={8}>
              <Typography variant='titleBold'>Location</Typography>
              <Typography variant='body'>East Legon Hill, Accre - Ghana</Typography>
            </Grid>
          </Grid>
        </Paper>
        <Paper elevation={24} sx={{ padding: "2%"}}>
          <Grid container>
            <Grid item xs={4}>
              <Image
                src='/contact/mail.svg'
                height={64}
                width={64}
                alt='Mail icon'
              />
            </Grid>
            <Grid item xs={8}>
              <Typography variant='titleBold'>Email</Typography>
               <Typography variant='body'>info@ngoane.com</Typography>
            </Grid>
          </Grid>
        </Paper>
      </Stack>
    </Paper>
  )
}

export default ContactInfo;
