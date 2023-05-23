import { FormContainer } from './StyledContact';
import { Stack, TextField } from '@mui/material';
import { CustomButton } from "@/styles/globalComponentsStyle";

const ContactForm = () => {
  return (
    <Stack spacing={4}>
      <FormContainer>
        <TextField label='Email Address' variant='outlined' />
        <TextField label='Full Name' variant='outlined' />
      </FormContainer>
      <TextField label='Write Your Message' variant='outlined' multiline rows={6} />
      <CustomButton variant='contained'> Send Message</CustomButton>
    </Stack>
  )
}

export default ContactForm;
