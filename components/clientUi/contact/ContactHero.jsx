import { Padding } from "@mui/icons-material";
import { StyledSection } from "./StyledContact";

const { Stack, Typography } = require("@mui/material");


const ContactHero = () => {
    return (
      <StyledSection>
        <Typography variant="headerMainBold" sx={{ color: "#FFFFFF"}}>Contact Us</Typography>
      </StyledSection>
    );
};

export default ContactHero;