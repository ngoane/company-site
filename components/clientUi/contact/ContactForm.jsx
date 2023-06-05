import { FormContainer, MessageButton } from './StyledContact';
import { Stack, TextField } from '@mui/material';

const ContactForm = () => {
  return (
    <Stack spacing={4}>
      <FormContainer>
        <TextField label='Email Address' variant='outlined' />
        <TextField label='Full Name' variant='outlined' />
      </FormContainer>
      <TextField label='Write Your Message' variant='outlined' multiline rows={6} />
      <MessageButton variant='contained' color='primary'> Send Message</MessageButton>
    </Stack>
  )
}

export default ContactForm;
