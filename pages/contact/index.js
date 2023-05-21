import { ContactContainer } from '@/components/contact/StyledContact';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';

const Contact = () => {
  return (
    <ContactContainer>
      <ContactForm />
      <ContactInfo />
    </ContactContainer>
  );
}

export default Contact;
