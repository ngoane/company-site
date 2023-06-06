import { StyledSection } from "./StyledAbout";
import { CenterTypography } from "./StyledAbout";
import { Button, Grid, Stack, Typography } from "@mui/material";
import { CustomButton, WhiteButton } from "@/styles/globalComponentsStyle";
import Image from "next/image";

export const AboutIntro = () => {
  return (
    <StyledSection>
      <CenterTypography variant="headerMainBold">About Ngoane</CenterTypography>
      <CenterTypography variant="headlineMainBold">Transforming Lives Through Personalized Healthcare Solutions</CenterTypography>
      <Stack direction={"row"} spacing={4} sx={{
        marginTop: "3rem", gap: "2rem",
      }}>
        <WhiteButton sx={{
          padding: "1.2rem",
        }}>Sign up to our service</WhiteButton>
        <Button variant="outlined" sx={{ color: "#ffffff", borderColor: "#ffffff", fontSize: "14px", }}>Contact Us</Button>       
      </Stack>
    </StyledSection>
  );
};

export const AboutInfo = () => {
  return (
    <Grid container sx={{ padding: "3rem"}}>
      <Grid item xs={4}>
        <div>
        <Typography variant="headerMainBold" sx={{ position: "relative", display: "inline-block",
        "&:after": {
          content: "''",
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "80%",
          borderBottom: " 3px solid #9764E8"
        }}}>Intro</Typography>
        </div>
        <Typography variant="headlineMainBold" sx={{ color: "#70657A", marginTop: "1rem"}}>Why We Started Ngoane?</Typography>
      </Grid>
      <Grid item xs={8}>
        <Stack spacing={6}>
          <Typography variant="body">Welcome to Ngoane, an innovative digital health platform revolutionizing the way individuals manage chronic
diseases. We are driven by our unwavering commitment to empower individuals with the tools, support, and
personalized care they need to live healthier, happier lives.</Typography>
          <Typography variant="body">With our platform, we are poised to make a significant impact in the lives of individuals living with chronic diseases,
providing them with a renewed sense of hope. control. and well-being.</Typography>
        </Stack>
        <Stack sx={{ padding: "4rem", flexDirection: "row", gap: "4rem"}}>
          <CustomButton sx={{ color: "#fff", backgroundColor: "#9764EB", padding: "0.8rem"}}>Sign up to our service</CustomButton>
          <CustomButton variant="outlined" sx={{ padding: "0.8rem"}}>Contact Us</CustomButton>
        </Stack>
      </Grid>
    </Grid>);
};

export const AboutGoal = () => {
  return (
    <Stack spacing={4}>      
      <Grid container sx={{ padding: "3rem"}}>
        <Grid item xs={5}>
          <Image
            src={"/about/Image_3.svg"}
            height={434}
            width={546}
            alt="Two women sitting"
          />
        </Grid>
        <Grid item xs={7}>
          <Stack spacing={4} sx={{ marginLeft: "5rem"}}>
            <Stack sx={{ padding: "0 8rem"}}>
              <Image
                src={"/about/heart.svg"}
                height={44}
                width={44}
                alt="Heart icon"
              />
            </Stack>
            <Typography variant="headerMainBold">Our Mission</Typography>
            <Typography variant="body">To empower individuals with chronic conditions to live their healthiest lives by
providing personalized, comprehensive care. We strive to improve the healthcare
landscape by reducing the burden of chronic disease and promoting preventive care.</Typography>
            <Stack sx={{ padding: "0 8rem"}}>
              <Image
                src={"/about/health.svg"}
                height={44}
                width={44}
                alt="Health Icon"
              />
            </Stack>
            <Typography variant="headerMainBold">Our Vision</Typography>
            <Typography variant="body">To empower individuals with chronic conditions to live their healthiest lives by
providing personalized, comprehensive care. We strive to improve the healthcare
landscape by reducing the burden of chronic disease and promoting preventive care.</Typography>
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
};

export const AboutStory = () => {
  return (
    <Grid container sx={{ padding: "3rem" }}>
      <Grid item xs={7}>
        <div>
          <Typography variant="headerMainBold" sx={{ position: "relative", display: "inline-block",
          "&:after": {
            content: "''",
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "43%",
            borderBottom: " 3px solid #9764E8"
          }}}>Our Story</Typography>
        </div>
        <Typography variant="headlineMainBold" sx={{ color: "#70657A", marginTop: "1rem"}}>Why Ngoane?</Typography>
        <Stack spacing={4} sx={{ marginTop: "1rem", marginRight: "5rem"}}>
          <Typography variant="body">Having witnessed the devastating impact of chronic diseases through personal loss and
professional experiences, we knew we had to take action. Our focus is twofold: supporting
individuals who have already been diagnosed with chronic conditions to live longer and
healthier lives. and empowering others to prevent the onset of these diseases.</Typography>
          <Typography variant="body">With a team driven by compassion, innovation, and collaboration, we have developed a
comprehensive platform that provides personalized care, education, and resources to
individuals living with chronic conditions. Through the power of technology, we deliver
actionable insights, practical tools, and a supportive community that fosters growth and
resilience.</Typography>
           <Typography variant="body">We believe that everyone deserves access to the knowledge and resources necessary to
manage their health effectively. By embracing personalized care and promoting proactive
lifestyle choices, we aim to extend lives, enhance well-being, and reduce the burden of
chronic diseases.</Typography>
        </Stack>
      </Grid>
      <Grid item xs={5}>
          <Image
            src={"/about/Image_3.svg"}
            height={434}
            width={546}
            alt="Two women sitting"
          />
      </Grid>
    </Grid>
  );
};

export const AboutApproach = () => {
  return (
    <Grid container sx={{ padding: "3rem"}}>
      <Grid item xs={5}>
          <Image
            src={"/about/Image_3.svg"}
            height={434}
            width={546}
            alt="Two women sitting"
          />
      </Grid>
      <Grid item xs={7}>
        <div style={{ marginLeft: "5rem"}}>
          <Typography variant="headerMainBold" sx={{ position: "relative", display: "inline-block",
          "&:after": {
            content: "''",
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "32%",
            borderBottom: " 3px solid #9764E8"
          }}}>Our Approach</Typography>
        </div>
        <Typography variant="headlineMainBold" sx={{ color: "#70657A", marginTop: "1rem", marginLeft: "5rem"}}>How we tackle the problem?</Typography>
        <Stack spacing={4} sx={{ marginTop: "1rem", marginLeft: "5rem"}}>
          <Typography variant="body">At Ngoane Health Tech, we take a unique approach to tackle chronic diseases. Our platform
combines cutting-edge technology, personalized care, and evidence-based strategies to empower
individuals in their health journey.</Typography>
           <Typography variant="body">Through our user-friendly mobile and web application, users have access to comprehensive health
tracking, personalized coaching, and a supportive community. We believe that by providing
tailored support and empowering individuals to take control of their health, we can make a lasting
impact on their well-being and reduce the burden of chronic diseases.</Typography>
        </Stack>
      </Grid>
    </Grid>
  );
};


export const AboutTeam = () => {
  return (
    <Stack spacing={4}>
      <Stack sx={{ alignItems: "center" }}>
        <Typography variant="headerMainBold" sx={{ position: "relative", display: "inline-block",
          "&:after": {
           content: "''",
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "32%",
            borderBottom: " 3px solid #9764E8"
          }}}>Who we are</Typography>
        </Stack>
        <Typography variant="headlineMainBold" sx={{ color: "#70657A", marginTop: "1rem", textAlign: "Center"}}>Our Team</Typography>
    <Grid container sx={{ padding: "3rem" }}>
      <Grid item xs={3}>
        <Stack spacing={2} sx={{ padding: "0 8rem" }}>
          <Stack sx={{ padding: "0 3rem"}}>
            <Image
              src={"/about/obed.svg"}
              height={65}
              width={65}
              alt="Ngoane CEO Photo" />
          </Stack>
          <Typography variant="titleBold">Dr. Obed Ehoneah</Typography>
          <Typography variant="body" color={"primary"}>Pharmacist & CEO</Typography>
          <Typography variant="body">Strong leadership and business
development skills with experience in the
healthcare industry</Typography>
        </Stack>
      </Grid>
      <Grid item xs={3}>
        <Stack spacing={2} sx={{ padding: "0 8rem" }}>
          <Stack sx={{ padding: "0 3rem"}}>
            <Image
              src={"/about/law.svg"}
              height={65}
              width={65}
              alt="Ngoane CTO Photo" />
          </Stack>
          <Typography variant="titleBold">Lawrence Ogereka</Typography>
          <Typography variant="body" color={"primary"}>Software Engineer & CTO</Typography>
          <Typography variant="body">Expertise in developing and managing
software systems, with experience in the
healthcare sector.</Typography>
        </Stack>
      </Grid>
      <Grid item xs={3}>
        <Stack spacing={2} sx={{ padding: "0 6rem" }}>
          <Stack sx={{ padding: "0 3rem"}}>
            <Image
              src={"/about/muk.svg"}
              height={65}
              width={65}
              alt="Ngoane CPO Photo" />
          </Stack>
          <Typography variant="titleBold">Mukhtar Mohammed</Typography>
          <Typography variant="body" color={"primary"}>Product Designer & CPO</Typography>
          <Typography variant="body">Skilled in responsive user
experience and interface design
and product management</Typography>
        </Stack>
      </Grid>
      <Grid item xs={3}>
        <Stack spacing={2} sx={{ padding: "0 6rem" }}>
          <Stack sx={{ padding: "0 3rem"}}>
            <Image
              src={"/about/max.svg"}
              height={65}
              width={65}
              alt="Ngoane Developer Photo" />
          </Stack>
          <Typography variant="titleBold">Maxwell D. Dorliea</Typography>
          <Typography variant="body" color={"primary"}>Software Engineer</Typography>
          <Typography variant="body">Experienced in developing clean
websites with modern softawere
technologies.</Typography>
        </Stack>
      </Grid>
    </Grid>
        <Stack sx={{ padding: "4rem", flexDirection: "row", gap: "4rem", alignItems: "center", justifyContent: "center"}}>
          <CustomButton sx={{ color: "#fff", backgroundColor: "#9764EB", padding: "0.8rem"}}>Sign Up To Get Started</CustomButton>
          <CustomButton variant="outlined" sx={{ padding: "0.8rem"}}>Contact Us</CustomButton>
        </Stack>
    </Stack>
  );
};