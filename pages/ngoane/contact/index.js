import { ContactContainer } from "@/components/clientUi/contact/StyledContact";
import ContactForm from "@/components/clientUi/contact/ContactForm";
import ContactInfo from "@/components/clientUi/contact/ContactInfo";

const Contact = () => {
  return (
    <ContactContainer>
      <ContactForm />
      <ContactInfo />
    </ContactContainer>
  );
};

export default Contact;
