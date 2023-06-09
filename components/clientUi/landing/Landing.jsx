import { CenterTypography, SpaceStack, QuickAccessButton, StyledStack, CustomStack, StyledImg, ImgContainer, StyledPaper, StyledAccordion, FAQTypography } from './StyledLanding';

import { Stack, Typography, Container, Paper, Grid } from '@mui/material';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import Image from 'next/image';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import ControlPointIcon from '@mui/icons-material/ControlPoint';

export const LandingIntro = () => {
  return (
    <Stack spacing={12}>
      <Container>
        <Stack spacing={3}>
          <CenterTypography variant='headerMainBold' color='primary'>A Better Way To Manage Your Chronic Condition</CenterTypography>
          <CenterTypography variant='h4'>
            Join a community of chronic disease warriors and achieve better health outcomes with our comprehensive health platform.
          </CenterTypography>
        </Stack>
      </Container>
      <SpaceStack>
        <QuickAccessButton variant='contained' color='primary'>
          <Stack spacing={2} direction='row'>
            <CenterTypography variant='body'>Get Started </CenterTypography>
              <Image
                src='landing/arrow.svg'
                width={20}
                height={20}
                alt="Arrow icon"
              />
          </Stack>
        </QuickAccessButton>
        <QuickAccessButton variant='outlined' color='primary'>
          <Stack spacing={2} direction='row'>
            <CenterTypography variant='body' color='primary'>Watch Demo</CenterTypography>
            <PlayCircleIcon color='primary'/>
          </Stack>
        </QuickAccessButton>
      </SpaceStack>
      <SpaceStack>
        <Image
          src='landing/hero.svg'
          width={992}
          height={928}
          alt="Hero Image"
         />
      </SpaceStack>
      <LandingService />
      <SpaceStack>
        <Stack spacing={4}>
          <Typography>
            <Typography variant='h2'>15 million people between</Typography>
            <Typography variant='h2'>30 - 60 years die every year</Typography>
          </Typography>
          <Typography>
            <Typography variant='title'>Did you know that every year, over 15 million people between the </Typography>
            <Typography variant='title'>ages of 30 and 69 die prematurely from chronic diseases such as heart disease, cancer, and diabetes?</Typography>
          </Typography>
          <Typography>
            <Typography variant='title'>But these deaths are preventable with the right care and support.</Typography>
            <Typography variant='title'>Ngoane is on a mission to change the narrative. Join us in the fight</Typography>
            <Typography variant='title'>against chronic diseases and help us build a healthier, more resilient Africa.</Typography>
          </Typography>
          <QuickAccessButton variant='contained' color='primary' size='small'>
            <Stack spacing={2} direction='row'>
              <CenterTypography variant='body'>Get Started </CenterTypography>
              <Image
                src='landing/arrow.svg'
                width={20}
                height={20}
                alt="Arrow icon"
              />
            </Stack>
          </QuickAccessButton>
        </Stack>
        <Image
          src='landing/Image_5.svg'
          width={450}
          height={450}
          alt="A Family Image"
        />
      </SpaceStack>
      <LandingKeyFeature />
      <LandingPlatformInfo />
      <LandingWhy />
      <LandingClient />
      <FAQ />
      <LandingClosing />
    </Stack>
  )
}

const LandingService = () => {
  return (
    <div style={{ backgroundColor: "#EFE9F5"}}>
    <Grid container spacing={8} columns={7} sx={{ margin: "0 10%", padding: "2rem 0"}}>
      <Grid item>
        <Stack spacing={2}>
          <div style={{ paddingLeft: "2rem"}}>
            <Image
              src='landing/heart.svg'
              width={96}
              height={96}
              alt="Heart Icon"
            />
          </div>
          <CenterTypography variant='title'>HEART DISEASE</CenterTypography>
        </Stack>
      </Grid>
      <Grid item>
        <Stack spacing={2}>
          <Image
            src='landing/info.svg'
            width={96}
            height={96}
            alt="Info Icon"
           />
         <CenterTypography variant='title'>CANCER</CenterTypography>
        </Stack>
      </Grid>
      <Grid item>
        <Stack spacing={2}>
          <div style={{ paddingLeft: "2rem"}}>
            <Image
              src='landing/wash.svg'
              width={96}
              height={96}
              alt="Hand Icon"
            />
          </div>
          <CenterTypography variant='title'>DIABETES</CenterTypography>
        </Stack>
      </Grid>
      <Grid item>
        <Stack spacing={2}>
          <div style={{ paddingLeft: "2rem"}}>
            <Image
              src='landing/kidney.svg'
              width={96}
              height={96}
              alt="Kidney Icon"
            />
          </div>
          <CenterTypography variant='title'>
            CHRONIC KIDNEY
          </CenterTypography>
          <CenterTypography variant='title'>
           DISEASES
          </CenterTypography>
        </Stack>
      </Grid>
      <Grid item>
        <Stack spacing={2}>
          <Image
            src='landing/stroke.svg'
            width={96}
            height={96}
            alt="Stroke Icon"
          />
          <CenterTypography variant='title'>STROKE</CenterTypography>
        </Stack>
      </Grid>
      <Grid item>
        <Stack spacing={2}>
          <div style={{ paddingLeft: "2rem"}}>
            <Image
              src='landing/aze.svg'
              width={96}
              height={96}
              alt="Aze Icon"
            />
          </div>
          <CenterTypography variant='title'>ALZHEIMER'S</CenterTypography>
          <CenterTypography variant='title'>DISEASE</CenterTypography>
        </Stack>
      </Grid>
      <Grid item>
        <Stack spacing={2}>
          <div style={{ paddingLeft: "2rem"}}>
            <Image
              src='landing/lung.svg'
              width={96}
              height={96}
              alt="Lung Icon"
            />
          </div>
          <CenterTypography variant='title'>CHRONIC LUNG</CenterTypography>
          <CenterTypography variant='title'>DISEASES</CenterTypography>
        </Stack>
      </Grid>
      </Grid>
      </div>
  )
}

const LandingKeyFeature = () => {
  return (
    <StyledStack spacing={8}>
      <CenterTypography variant='h1'>Key Features</CenterTypography>
      <Stack sx={{ flexDirection: "row", justifyContent: "space-evenly"}}>
        <Stack spacing={3}>
          <Stack direction='row' spacing={2}>
            <Image
              src='landing/track.svg'
              width={40}
              height={40}
              alt="Tracker Icon"
            />
            <Typography variant='title' sx={{ paddingTop: "0.6rem"}}>Symptom Tracker</Typography>
          </Stack>
          <Typography>
            <Typography variant='body'>Keep track of your symptoms and monitor your</Typography>
            <Typography>progress over time.</Typography>
          </Typography>
        </Stack>
        <Stack spacing={3}>
          <Stack direction='row' spacing={2}>
            <Image
              src='landing/track.svg'
              width={40}
              height={40}
              alt="Tracker Icon"
            />
            <Typography variant='title' sx={{ paddingTop: "0.6rem"}}>Regular Reminders</Typography>
          </Stack>
          <Typography>
            <Typography variant='body'>Stay on track with regular reminders to take medication</Typography>
            <Typography>and attend appointments.</Typography>
          </Typography>
        </Stack>
        <Stack spacing={3}>
          <Stack direction='row' spacing={2}>
            <Image
              src='landing/track.svg'
              width={40}
              height={40}
              alt="Tracker Icon"
            />
            <Typography variant='title' sx={{ paddingTop: "0.6rem"}}>Health Records</Typography>
          </Stack>
          <Typography>
            <Typography variant='body'>Access your health records anytime, anywhere,</Typography>
            <Typography>and share them with your healthcare team.</Typography>
          </Typography>
        </Stack>
      </Stack>
      <Stack sx={{ flexDirection: "row", justifyContent: "space-evenly"}}>
        <Stack spacing={3}>
          <Stack direction='row' spacing={2}>
            <Image
              src='landing/track.svg'
              width={40}
              height={40}
              alt="Tracker Icon"
            />
            <Typography variant='title' sx={{ paddingTop: "0.6rem"}}>Al Health Assistant</Typography>
          </Stack>
          <Typography>
            <Typography variant='body'>Get personalized guidance and support from our</Typography>
            <Typography>Al-powered health assistant.</Typography>
          </Typography>
        </Stack>
        <Stack spacing={3}>
          <Stack direction='row' spacing={2}>
            <Image
              src='landing/track.svg'
              width={40}
              height={40}
              alt="Tracker Icon"
            />
            <Typography variant='title' sx={{ paddingTop: "0.6rem"}}>Personalized Health Coaches</Typography>
          </Stack>
          <Typography>
            <Typography variant='body'>Connect with expert health coaches for</Typography>
            <Typography>personalized guidance and support.</Typography>
          </Typography>
        </Stack>
        <Stack spacing={3}>
          <Stack direction='row' spacing={2}>
            <Image
              src='landing/track.svg'
              width={40}
              height={40}
              alt="Tracker Icon"
            />
            <Typography variant='title' sx={{ paddingTop: "0.6rem"}}>Social Support</Typography>
          </Stack>
          <Typography>
            <Typography variant='body'>Join a community of patients like you for support</Typography>
            <Typography>and inspiration.</Typography>
          </Typography>
        </Stack>
      </Stack>
      <Stack sx={{ flexDirection: "row", justifyContent: "space-evenly"}}>
        <Stack spacing={3}>
          <Stack direction='row' spacing={2}>
            <Image
              src='landing/track.svg'
              width={40}
              height={40}
              alt="Tracker Icon"
            />
            <Typography variant='title' sx={{ paddingTop: "0.6rem"}}>Expert Guidance</Typography>
          </Stack>
          <Typography>
            <Typography variant='body'>Get expert guidance from our team of healthcare</Typography>
            <Typography>professionals, available 24/7.</Typography>
          </Typography>
        </Stack>
        <Stack spacing={3}>
          <Stack direction='row' spacing={2}>
            <Image
              src='landing/track.svg'
              width={40}
              height={40}
              alt="Tracker Icon"
            />
            <Typography variant='title' sx={{ paddingTop: "0.6rem"}}>Community Meetups</Typography>
          </Stack>
          <Typography>
            <Typography variant='body'>Connect with others in your community through</Typography>
            <Typography>regular meetups and events.</Typography>
          </Typography>
        </Stack>
        <Stack spacing={3}>
          <Stack direction='row' spacing={2}>
            <Image
              src='landing/track.svg'
              width={40}
              height={40}
              alt="Tracker Icon"
            />
            <Typography variant='title' sx={{ paddingTop: "0.6rem"}}>Educational Materials</Typography>
          </Stack>
          <Typography>
            <Typography variant='body'>Access a wealth of educational materials to help</Typography>
            <Typography>you better understand your condition and how to</Typography>
            <Typography>manage it effectively.</Typography>
          </Typography>
        </Stack>
      </Stack>
    </StyledStack>
  )
}

const LandingPlatformInfo = () => {
  return (
      <Stack spacing={6}>
        <CenterTypography variant='h2'>What you get for using our platform </CenterTypography>
        <CustomStack>
          <Stack spacing={3}>
            <Typography variant='h4' color='primary'>Continuity of Care</Typography>
            <Typography>
              <Typography variant='title'>Stay on top of your health with seamless</Typography>
              <Typography variant='title'>and consistent care</Typography>
            </Typography>
            <Typography>
              <Typography variant='body'>Our platform makes it easy to keep track of your health</Typography>
              <Typography variant='body'>records, symptoms, and progress over time.</Typography>
            </Typography>
            <Typography>
              <Typography variant='body'>You can share this data with your healthcare team, ensuring</Typography>
              <Typography variant='body'>that they have the information they need to provide you with</Typography>
              <Typography variant='body'>the best possible care.</Typography>
            </Typography>
            <Typography>
              <Typography variant='body'>With Ngoane, you'll have access to personalized care that is</Typography>
              <Typography variant='body'>informed by your unique health data.</Typography>
            </Typography>
          </Stack>
          <Image
            src='landing/Image_4.svg'
            width={512}
            height={512}
            alt="A Family Image"
          />
        </CustomStack>
        <CustomStack>
          <Image
            src='landing/Image_3.svg'
            width={512}
            height={512}
            alt="A Family Image"
          />
          <Stack spacing={3}>
            <Typography variant='h4' color='primary'>Improve Adherence</Typography>
            <Typography>
              <Typography variant='title'>Stay on track with your treatment with</Typography>
              <Typography variant='title'>reminders and the right support</Typography>
            </Typography>
            <Typography>
              <Typography variant='body'>Our platform is designed to help you manage your chronic</Typography>
              <Typography variant='body'>condition by providing regular reminders for your medication,</Typography>
              <Typography variant='body'>appointments, and other important aspects of your care.</Typography>
            </Typography>
            <Typography>
              <Typography variant='body'>Our Al-powered health assistant offers personalized guidance</Typography>
              <Typography>and support, empowering you to take an active role in</Typography>
              <Typography variant='body'>managing your condition and improving your overall health</Typography>
              <Typography variant='body'>and well-being</Typography>
            </Typography>
            <Typography>
              <Typography variant='body'>With our platform, you can stay on top of your treatment plan</Typography>
              <Typography variant='body'>and achieve better health outcomes.</Typography>
            </Typography>
          </Stack>
        </CustomStack>
        <CustomStack>
          <Stack spacing={3}>
            <Typography variant='h4' color='primary'>Empower you</Typography>
            <Typography>
              <Typography variant='title'>Take control of your health: Be an active</Typography>
              <Typography variant='title'>participant in your care</Typography>
            </Typography>
            <Typography>
              <Typography variant='body'>Our platform puts you in control of your health by providing</Typography>
              <Typography variant='body'>you with the tools and resources you need to manage your</Typography>
              <Typography variant='body'>condition effectively.</Typography>
            </Typography>
            <Typography>
              <Typography variant='body'>With access to expert guidance, personalized coaching,</Typography>
              <Typography>educational materials, and a supportive community of patients</Typography>
              <Typography variant='body'>like you, you can take an active role in your own care and</Typography>
              <Typography variant='body'>achieve better health outcomes.</Typography>
            </Typography>
          </Stack>
          <Image
            src='landing/Image_2.svg'
            width={512}
            height={512}
            alt="A Family Image"
          />
        </CustomStack>
      </Stack>
  )
}

const LandingWhy = () => {
  return (
    <StyledStack spacing={12}>
      <CenterTypography variant='h2' color='primary'>Why use Ngoane?</CenterTypography>
      <SpaceStack>
        <StyledPaper elevation={24}>
         <ImgContainer>
           <StyledImg
             style={{ backgroundColor: "rgba(45, 147, 60, 0.16)"}}
             src='landing/cash.svg'
             width={96}
             height={96}
             alt="Cash Icon"
           />
          </ImgContainer>
          <CenterTypography variant='h4'>Save Money</CenterTypography>
          <CenterTypography variant='body'>Manage your chronic condition with our platform</CenterTypography>
          <CenterTypography variant='body'>and reduce costly hospitalizations and emergencies.</CenterTypography>
          <CenterTypography variant='body'>Save money while improving your health outcomes</CenterTypography>
          <CenterTypography variant='body'>with the help of our health coaches and other</CenterTypography>
          <CenterTypography variant='body'>support systems</CenterTypography>
        </StyledPaper>
        <StyledPaper elevation={24}>
         <ImgContainer>
           <StyledImg
             style={{ backgroundColor: "rgba(227,18,118, 0.16)", padding: "6px"}}
             src='landing/self.svg'
             width={96}
             height={96}
             alt="Person Icon"
           />
          </ImgContainer>
          <CenterTypography variant='h4'>Improved quality of life</CenterTypography>
          <CenterTypography variant='body'>Chronic conditions can significantly impact a</CenterTypography>
          <CenterTypography variant='body'>person's quality of life, and by providing tools and</CenterTypography>
          <CenterTypography variant='body'>resources to help manage those conditions, our</CenterTypography>
          <CenterTypography variant='body'>platform can help you feel better and more in</CenterTypography>
          <CenterTypography variant='body'>control of their health.</CenterTypography>
        </StyledPaper>
        <StyledPaper elevation={24}>
         <ImgContainer>
           <StyledImg
             style={{ backgroundColor: "rgba(145, 56, 232, 0.16)", padding: "6px"}}
             src='landing/con.svg'
             width={96}
             height={96}
             alt="Convenience Icon"
           />
          </ImgContainer>
          <CenterTypography variant='h4'>Convenience</CenterTypography>
          <CenterTypography variant='body'>Chronic conditions can significantly impact a</CenterTypography>
          <CenterTypography variant='body'>person's quality of life, and by providing tools and</CenterTypography>
          <CenterTypography variant='body'>resources to help manage those conditions, our</CenterTypography>
          <CenterTypography variant='body'>platform can help you feel better and more in</CenterTypography>
          <CenterTypography variant='body'>control of their health.</CenterTypography>
        </StyledPaper>
      </SpaceStack>
    </StyledStack>
  )
}

const LandingClient = () => {
  return (
    <Stack spacing={8} sx={{ margin: "0 10%"}}>
      <Stack spacing={2}>
        <CenterTypography variant='headerMainBold'>Our happy clients</CenterTypography>
        <CenterTypography variant='bodyBold' sx={{ color: "rgb(119, 119, 119)"}}>What they say about Ngoane PHR</CenterTypography>
      </Stack>
      <SpaceStack>
        <Image
          src='landing/quote.svg'
          width={548}
          height={116}
          alt="Quote icon"
        />
      </SpaceStack>
      <Grid container sx={{ padding: "0 10rem"}}>
        <Grid item xs={2}>
          <Image
            src='landing/image_c1.svg'
            width={64}
            height={64}
            alt="Customer Image"
          />
        </Grid>
        <Grid item xs={2}>
          <Image
            src='landing/image_c2.svg'
            width={64}
            height={64}
            alt="Customer Image"
          />
        </Grid>
        <Grid item xs={2}>
          <Image
            src='landing/image_c3.svg'
            width={548}
            height={116}
            alt="Customer Image"
          />
        </Grid>
        <Grid item xs={2}>
          <CenterTypography variant='bodyBold' sx={{ paddingTop: "2rem"}}>Ellisa Anthor</CenterTypography>
          <CenterTypography variant='body' sx={{ color: "rgb(119, 119, 119)"}}>CEO - Ngoane</CenterTypography>
        </Grid>
        <Grid item xs={2}>
          <Image
            src='landing/image_c4.svg'
            width={64}
            height={64}
            alt="Customer Image"
          />
        </Grid>
        <Grid item xs={2}>
          <Image
            src='landing/image_c5.svg'
            width={64}
            height={64}
            alt="Customer Image"
          />
        </Grid>
      </Grid>
    </Stack>
  );
};

const FAQ = () => {
  return (
    <div style={{ backgroundColor: "#EFE9F5"}}>
    <Stack spacing={3} sx={{ alignItems: "center", justifyContent: "center", margin: "0 5%", padding: "2rem"}}>
      <CenterTypography variant='headerMainBold'>Frequently Asked Questions (FAQs)</CenterTypography>
      <CenterTypography variant='title' sx={{ color: "rgb(119, 119, 119)"}}>Find answers to some common auestions about our Dlatform below</CenterTypography>
        <StyledAccordion>
          <AccordionSummary expandIcon={<ControlPointIcon sx={{ marginRight: "1rem", fontSize: "2rem"}} />} sx={{ flexDirection: 'row-reverse' }}>
            <FAQTypography variant='bodyBold'>What types of chronic conditions are best suited for your platform?</FAQTypography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Ngoane is an online platform that allows individuals to easily record and store their emergency<br />health data, and make it available to health professionals in the case of any health emergency. Our<br />platform is designed to give you peace of mind and the assurance that your health information will<br />he readilv accessible in the event of a crisis</Typography>
          </AccordionDetails>
        </StyledAccordion>
        <StyledAccordion disableGutters>
          <AccordionSummary expandIcon={<ControlPointIcon sx={{ marginRight: "1rem", fontSize: "2rem"}}/>} sx={{ flexDirection: "row-reverse"}}>
            <FAQTypography variant='bodyBold'>Is technical support available if I have trouble using it?</FAQTypography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Ngoane is an online platform that allows individuals to easily record and store their emergency<br />health data, and make it available to health professionals in the case of any health emergency. Our<br />platform is designed to give you peace of mind and the assurance that your health information will<br />he readilv accessible in the event of a crisis</Typography>
          </AccordionDetails>
        </StyledAccordion>
        <StyledAccordion>
          <AccordionSummary expandIcon={<ControlPointIcon sx={{ marginRight: "1rem", fontSize: "2rem"}} />} sx={{ flexDirection: 'row-reverse' }}>
            <FAQTypography variant='bodyBold'>What type of chronic conditions are best for our platform?</FAQTypography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Ngoane is an online platform that allows individuals to easily record and store their emergency<br />health data, and make it available to health professionals in the case of any health emergency. Our<br />platform is designed to give you peace of mind and the assurance that your health information will<br />he readilv accessible in the event of a crisis</Typography>
          </AccordionDetails>
        </StyledAccordion>
        <StyledAccordion>
          <AccordionSummary expandIcon={<ControlPointIcon sx={{ marginRight: "1rem", fontSize: "2rem"}} />} sx={{ flexDirection: 'row-reverse' }}>
            <FAQTypography variant='bodyBold'>How much does it cost to use the platform?</FAQTypography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Ngoane is an online platform that allows individuals to easily record and store their emergency<br />health data, and make it available to health professionals in the case of any health emergency. Our<br />platform is designed to give you peace of mind and the assurance that your health information will<br />he readilv accessible in the event of a crisis</Typography>
          </AccordionDetails>
        </StyledAccordion>
        <StyledAccordion>
          <AccordionSummary expandIcon={<ControlPointIcon sx={{ marginRight: "1rem", fontSize: "2rem"}} />} sx={{ flexDirection: 'row-reverse' }}>
            <FAQTypography variant='bodyBold'>Is you personnal data safe and secure on our platform?</FAQTypography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Ngoane is an online platform that allows individuals to easily record and store their emergency<br />health data, and make it available to health professionals in the case of any health emergency. Our<br />platform is designed to give you peace of mind and the assurance that your health information will<br />he readilv accessible in the event of a crisis</Typography>
          </AccordionDetails>
        </StyledAccordion>
        <StyledAccordion>
          <AccordionSummary expandIcon={<ControlPointIcon sx={{ marginRight: "1rem", fontSize: "2rem"}} />} sx={{ flexDirection: 'row-reverse' }}>
            <FAQTypography variant='bodyBold'>What kind of healthcare professionals are available on our platform?</FAQTypography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Ngoane is an online platform that allows individuals to easily record and store their emergency<br />health data, and make it available to health professionals in the case of any health emergency. Our<br />platform is designed to give you peace of mind and the assurance that your health information will<br />he readilv accessible in the event of a crisis</Typography>
          </AccordionDetails>
        </StyledAccordion>
    </Stack>
    </div>
  )
};


const LandingClosing = () => {
  return (
    <div style={{ margin: "3% 10% 0 10%", padding: "10% 0"}}>
    <Grid container>
      <Grid item xs={7}>
        <Stack spacing={4}>
        <Typography>
          <Typography variant="headerMainBold">Create your Account</Typography>
          <Typography variant="headerMainBold">Today and Get Started</Typography>
        </Typography>
        <Typography>
          <Typography variant='title'>Take control of your health today! Sign up for Ngoane and the</Typography>
          <Typography variant='title'>empowered to fight chronic disease like the warrior you</Typography>
          <Typography variant='title'>are.</Typography>
        </Typography>
        <QuickAccessButton variant='contained' color='primary'>
          <Stack spacing={2} direction='row'>
            <CenterTypography variant='body'>Get Started </CenterTypography>
              <Image
                src='landing/arrow.svg'
                width={20}
                height={20}
                alt="Arrow icon"
              />
          </Stack>
        </QuickAccessButton>
        </Stack>
      </Grid>
      <Grid item xs={5}>
        <div style={{ position: "relative", margin: "30% 0"}}>
        <Image
          style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", marginTop: "6rem"}}
          src='landing/doc_bg.svg'
          width={516}
          height={516}
          alt="Doctor Image"
        />
        <Image
          style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", marginRight: "40%"}}
          src='landing/Image_6.svg'
          width={600}
          height={600}
          alt="Doctor Image"
        />
        </div>
    </Grid>
    </Grid>
    </div>
  );
};