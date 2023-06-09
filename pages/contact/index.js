import { Grid, Stack } from '@mui/material';
import ContactForm from '@/components/clientUi/contact/ContactForm';
import ContactInfo from '@/components/clientUi/contact/ContactInfo';
import ContactHero from '@/components/clientUi/contact/ContactHero';

const Contact = () => {
  return (
    <Stack>
      <ContactHero />
      <div style={{ margin: "10% 10% 0 10%"}}>
        <Grid container>
          <Grid item xs={5}>
            <ContactInfo />
          </Grid>
          <Grid item xs={7}>
            <ContactForm />
          </Grid>
        </Grid>
      </div>
   </Stack>
  );
}

export default Contact;
