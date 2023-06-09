import { StyledSection } from "./StyledAbout";
import { CenterTypography } from "./StyledAbout";
import { Button, Grid, Stack, Typography } from "@mui/material";
import { CustomButton, WhiteButton } from "@/styles/globalComponentsStyle";
import Image from "next/image";

export const AboutIntro = () => {
  return (
    <StyledSection>
      <div style={{ margin: "0 10%" }}>
      <CenterTypography variant="headerMainBold" sx={{ color: "#FFFFFF" }}>About Ngoane</CenterTypography>
      <CenterTypography variant="headlineMainBold" sx={{ color: "#FFFFFF" }}>Transforming Lives Through Personalized Healthcare Solutions</CenterTypography>
      <Stack direction={"row"} spacing={4} sx={{
          marginTop: "3rem", gap: "2rem", alignItems: "center", justifyContent: "center"
      }}>
        <WhiteButton sx={{
          padding: "1.2rem",
        }}>Sign up to our service</WhiteButton>
        <Button variant="outlined" sx={{ color: "#ffffff", borderColor: "#ffffff", fontSize: "14px", }}>Contact Us</Button>       
      </Stack>
      </div>
    </StyledSection>
  );
};

export const AboutInfo = () => {
  return (
    <div style={{ margin: "0 10%" }}>
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
          <Typography>
            <Typography variant="body">Welcome to Ngoane, an innovative digital health platform revolutionizing the way</Typography>
            <Typography variant='body'>individuals manage chronic diseases. We are driven by our unwavering</Typography>
            <Typography variant='body'>commitment to empower individuals with the tools, support, and personalized</Typography>
            <Typography variant='body'>care they need to live healthier, happier lives.</Typography>
          </Typography>
          <Typography>
            <Typography variant="body">With our platform, we are poised to make a significant impact in the lives of</Typography>
            <Typography variant='body'>individuals living with chronic diseases, providing them with a renewed sense</Typography>
            <Typography variant='body'>of hope. control. and well-being.</Typography>
          </Typography>
        </Stack>
        <Stack sx={{ padding: "4rem", flexDirection: "row", gap: "4rem", alignItems: "center", justifyContent: "center"}}>
          <CustomButton sx={{ color: "#fff", backgroundColor: "#9764EB", padding: "0.8rem"}}>Sign up to our service</CustomButton>
          <CustomButton variant="outlined" sx={{ padding: "0.8rem"}}>Contact Us</CustomButton>
        </Stack>
      </Grid>
    </Grid>
    </div>);
};

export const AboutGoal = () => {
  return (
    <Stack spacing={4} sx={{ margin: "0 10%" }}>      
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
          <Stack spacing={3} sx={{ marginLeft: "5rem"}}>
            <Stack sx={{ padding: "0 8rem"}}>
              <Image
                src={"/about/heart.svg"}
                height={44}
                width={44}
                alt="Heart icon"
              />
            </Stack>
            <Typography>
              <Typography variant="headerMainBold">Our Mission</Typography>
              <Typography variant="body">To empower individuals with chronic conditions to live their healthiest lives by</Typography>
              <Typography variant='body'>providing personalized, comprehensive care. We strive to improve the</Typography>
              <Typography variant='body'>healthcare landscape by reducing the burden of chronic disease and</Typography>
              <Typography variant='body'>promoting preventive care.</Typography>
            </Typography>
            <Stack sx={{ padding: "2rem 8rem 0 8rem"}}>
              <Image
                src={"/about/health.svg"}
                height={44}
                width={44}
                alt="Health Icon"
              />
            </Stack>
            <Typography variant="headerMainBold">Our Vision</Typography>
            <Typography>
              <Typography variant="body">To empower individuals with chronic conditions to live their healthiest lives by</Typography>
              <Typography variant='body'>providing personalized, comprehensive care. We strive to improve the </Typography>
              <Typography variant='body'>healthcare landscape by reducing the burden of chronic disease and</Typography>
              <Typography variant='body'>promoting preventive care.</Typography>
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
};

export const AboutStory = () => {
  return (
    <div style={{ margin: "0 8%" }}>
    <Grid container sx={{ padding: "3rem" }}>
      <Grid item xs={8}>
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
          <Typography>
            <Typography variant="body">Having witnessed the devastating impact of chronic diseases through personal loss</Typography><Typography variant='body'>and professional experiences, we knew we had to take action. Our focus is two fold: </Typography>
            <Typography variant='body'>supporting individuals who have already been diagnosed with chronic conditions to</Typography>
            <Typography variant='body'>live longer and healthier lives. and empowering others to prevent the onset of these</Typography>
            <Typography variant='body'>diseases.</Typography>
          </Typography>
          <Typography>
            <Typography variant="body">With a team driven by compassion, innovation, and collaboration, we have developed</Typography>
           <Typography variant='body'>a comprehensive platform that provides personalized care, education, and resources</Typography>
            <Typography variant='body'>to individuals living with chronic conditions. Through the power of technology, we</Typography>
            <Typography variant='body'>deliver actionable insights, practical tools, and a supportive community that fosters</Typography>
            <Typography variant='body'>growth and resilience.</Typography>
          </Typography>
          <Typography>
           <Typography variant="body">We believe that everyone deserves access to the knowledge and resources necessary</Typography>
           <Typography variant='body'>to manage their health effectively. By embracing personalized care and promoting</Typography>
           <Typography variant='body'>proactive lifestyle choices, we aim to extend lives, enhance well-being, and reduce</Typography>
          <Typography variant='body'>the burden of chronic diseases.</Typography>
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={4}>
          <Image
            src={"/about/Image_3.svg"}
            height={434}
            width={546}
            alt="Two women sitting"
          />
      </Grid>
    </Grid>
    </div>
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
          <Typography>
            <Typography variant="body">At Ngoane Health Tech, we take a unique approach to tackle chronic</Typography>
            <Typography variant='body'>diseases. Our platform combines cutting-edge technology, personalized care,</Typography>
            <Typography variant='body'>and evidence-based strategies to empower individuals in their health journey.</Typography>
          </Typography>
          <Typography>
            <Typography variant="body">Through our user-friendly mobile and web application, users have access to</Typography>
            <Typography variant='body'>comprehensive health tracking, personalized coaching, and a supportive</Typography>
            <Typography variant='body'>community. We believe that by providing tailored support and empowering</Typography>
            <Typography variant='body'>individuals to take control of their health, we can make a lasting impact on</Typography>
            <Typography variant='body'>their well-being and reduce the burden of chronic diseases.</Typography>
          </Typography>
        </Stack>
      </Grid>
    </Grid>
  );
};


export const AboutTeam = () => {
  return (
    <Stack spacing={4} sx={{ margin: "0 10%" }}>
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
        <Stack spacing={2}>
          <Stack sx={{ paddingLeft: "8rem"}}>
            <Image
              src={"/about/obed.svg"}
              height={65}
              width={65}
              alt="Ngoane CEO Photo" />
          </Stack>
          <CenterTypography variant="titleBold">Dr. Obed Ehoneah</CenterTypography>
          <CenterTypography variant="body" color={"primary"}>Pharmacist & CEO</CenterTypography>
          <Typography>
            <CenterTypography variant="body">Strong leadership and business</CenterTypography>
            <CenterTypography variant='body'>development skills with experience in the</CenterTypography>
            <CenterTypography variant='body'>healthcare industry</CenterTypography>
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={3}>
        <Stack spacing={2}>
          <Stack sx={{ paddingLeft: "8rem"}}>
            <Image
              src={"/about/law.svg"}
              height={65}
              width={65}
              alt="Ngoane CTO Photo" />
          </Stack>
          <CenterTypography variant="titleBold">Lawrence Ogereka</CenterTypography>
          <CenterTypography variant="body" color={"primary"}>Software Engineer & CTO</CenterTypography>
          <Typography>
             <CenterTypography variant="body">Expertise in developing and managing</CenterTypography>
             <CenterTypography variant='body'>software systems, with experience in the</CenterTypography>
             <CenterTypography variant='body'>healthcare sector.</CenterTypography>
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={3}>
        <Stack spacing={2}>
          <Stack sx={{ paddingLeft: "8rem"}}>
            <Image
              src={"/about/muk.svg"}
              height={65}
              width={65}
              alt="Ngoane CPO Photo" />
          </Stack>
          <CenterTypography variant="titleBold">Mukhtar Mohammed</CenterTypography>
          <CenterTypography variant="body" color={"primary"}>Product Designer & CPO</CenterTypography>
          <Typography>
            <CenterTypography variant="body">Skilled in responsive user</CenterTypography>
            <CenterTypography variant='body'>experience and interface design</CenterTypography>
            <CenterTypography variant='body'>and product management</CenterTypography>
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={3}>
        <Stack spacing={2}>
          <Stack sx={{ paddingLeft: "8rem"}}>
            <Image
              src={"/about/max.svg"}
              height={65}
              width={65}
              alt="Ngoane Developer Photo" />
          </Stack>
          <CenterTypography variant="titleBold">Maxwell D. Dorliea</CenterTypography>
          <CenterTypography variant="body" color={"primary"}>Software Engineer</CenterTypography>
          <Typography>
            <CenterTypography variant="body">Experienced in developing clean</CenterTypography>
            <CenterTypography variant='body'>websites with modern softawere technologies.</CenterTypography>
          </Typography>
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
