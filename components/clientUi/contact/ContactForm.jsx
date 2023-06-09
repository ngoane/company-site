import { FormContainer, MessageButton } from './StyledContact';
import { Paper, Stack, TextField, Typography } from '@mui/material';

const ContactForm = () => {
  return (
    <Paper elevation={24} sx={{ flexDirection: "column", gap: "2rem", padding: "5% 10%"}}>
      <Stack spacing={4}>
        <Stack>
          <Typography variant='headlineMainBold' color={'primary'}>Write us a Message</Typography>
          <Typography variant='body' sx={{ color: "rgb(112, 109, 112)"}}>Send our concerns to us. We're available 24/7 to respond</Typography>
        </Stack>
        <Stack direction={'row'} spacing={4}>
          <TextField label='Email Address' variant='outlined' />
          <TextField label='Full Name' variant='outlined' />
        </Stack>
        <Stack spacing={4}>
          <TextField label='Write Your Message' variant='outlined' multiline rows={6} />
          <MessageButton variant='contained' color='primary'> Send Message</MessageButton>
        </Stack>
      </Stack>
    </Paper>
  )
}

export default ContactForm;
