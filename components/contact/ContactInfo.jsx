import { Typography, Stack } from '@mui/material';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const ContactInfo = () => {
  return (
    <Stack spacing={4}>
      <Typography variant='h2' color='primary'>Contact Us</Typography>
      <Stack spacing={2}>
        <Stack spacing={2} direction='row'>
          <EmailOutlinedIcon color='primary' />
          <Typography variant='body'>info@ngoane.com</Typography>
        </Stack>
        <Stack spacing={2} direction='row'>
          <LocalPhoneOutlinedIcon color='primary' />
          <Typography variant='body'>+233 (0) 24 000 0000</Typography>
        </Stack>
        <Stack spacing={2} direction='row'>
          <LocationOnOutlinedIcon color='primary' />
          <Typography variant='body'>East Legon Hill, Accre - Ghana</Typography>
        </Stack>
      </Stack>
      <Typography variant='bodyBold'>Follow Us On</Typography>
      <Stack spacing={2} direction='row'>
        <FacebookIcon color="primary" />
        <TwitterIcon color="primary" />
        <InstagramIcon color="primary" />
        <LinkedInIcon color="primary" />
        <YouTubeIcon color="primary" />
      </Stack>
    </Stack>
  )
}

export default ContactInfo;
