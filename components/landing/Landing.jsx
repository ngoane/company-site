import { CenterTypography, SpaceStack, QuickAccessButton, StyledStack, CustomStack, StyledImg, ImgContainer, StyledPaper } from './StyledLanding';

import { Stack, Typography, Container, Paper } from '@mui/material';
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
            <ArrowCircleRightIcon />
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
          <CenterTypography variant='h2'>
            15 million people between 30 - 60 years die every year
          </CenterTypography>
          <CenterTypography variant='h5'>
            Did you know that every year, over 15 million people between the
            ages of 30 and 69 die prematurely from chronic diseases such as heart disease, cancer, and diabetes?
          </CenterTypography>
          <CenterTypography variant='h5'>
            But these deaths are preventable with the right care and support.
            Ngoane is on a mission to change the narrative. Join us in the fight
            against chronic diseases and help us build a healthier, more resilient Africa.
          </CenterTypography>
          <QuickAccessButton variant='contained' color='primary' size='small'>
            <Stack spacing={2} direction='row'>
              <CenterTypography variant='body'>Get Started </CenterTypography>
              <ArrowCircleRightIcon />
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
      <FAQ />
    </Stack>
  )
}

const LandingService = () => {
  return (
    <StyledStack spacing={6} direction='row'>
        <Stack spacing={2}>
          <Image
            src='landing/heart.svg'
            width={96}
            height={96}
            alt="Heart Icon"
          />
          <Typography variant='h5'>HEART DISEASE</Typography>
        </Stack>
        <Stack spacing={2}>
         <Image
          src='landing/info.svg'
          width={96}
          height={96}
          alt="Info Icon"
         />
         <Typography variant='h5'>CANCER</Typography>
        </Stack>
        <Stack spacing={2}>
          <Image
            src='landing/wash.svg'
            width={96}
            height={96}
            alt="Hand Icon"
          />
          <Typography variant='h5'>DIABETES</Typography>
        </Stack>
        <Stack spacing={2}>
          <Image
            src='landing/kidney.svg'
            width={96}
            height={96}
            alt="Kidney Icon"
          />
          <Typography variant='h5'>
            CHRONIC KIDNEY DISEASES
          </Typography>
        </Stack>
        <Stack spacing={2}>
          <Image
            src='landing/stroke.svg'
            width={96}
            height={96}
            alt="Stroke Icon"
          />
          <Typography variant='h5'>STROKE</Typography>
        </Stack>
        <Stack spacing={2}>
          <Image
            src='landing/aze.svg'
            width={96}
            height={96}
            alt="Aze Icon"
          />
          <Typography variant='h5'>ALZHEIMER'S DISEASE</Typography>
        </Stack>
        <Stack spacing={2}>
          <Image
            src='landing/lung.svg'
            width={96}
            height={96}
            alt="Lung Icon"
          />
          <Typography variant='h5'>CHRONIC LUNG DISEASES</Typography>
        </Stack>
      </StyledStack>
  )
}

const LandingKeyFeature = () => {
  return (
    <StyledStack spacing={6}>
      <CenterTypography variant='h1'>Key Features</CenterTypography>
      <SpaceStack>
        <Stack>
          <Stack direction='row' spacing={2}>
            <AcUnitIcon color='primary' fontSize='large' />
            <Typography variant='h5'>Symptom Tracker</Typography>
          </Stack>
          <CenterTypography variant='body'>Keep track of your symptoms and monitor your<br /> progress over time.</CenterTypography>
        </Stack>
        <Stack>
          <Stack direction='row' spacing={2}>
            <AcUnitIcon color='primary' fontSize='large' />
            <Typography variant='h5'>Regular Reminders</Typography>
          </Stack>
          <CenterTypography variant='body'>Stay on track with regular reminders to take medication<br /> and attend appointments.</CenterTypography>
        </Stack>
        <Stack>
          <Stack direction='row' spacing={2}>
            <AcUnitIcon color='primary' fontSize='large' />
            <CenterTypography variant='h5'>Health Records</CenterTypography>
          </Stack>
          <CenterTypography variant='body'>Access your health records anytime, anywhere,<br /> and share them with your healthcare team.</CenterTypography>
        </Stack>
      </SpaceStack>
      <SpaceStack>
        <Stack>
          <Stack direction='row' spacing={2}>
            <AcUnitIcon color='primary' fontSize='large' />
            <Typography variant='h5'>Al Health Assistant</Typography>
          </Stack>
          <CenterTypography variant='body'>Get personalized guidance and support from our<br />Al-powered health assistant.</CenterTypography>
        </Stack>
        <Stack>
          <Stack direction='row' spacing={2}>
            <AcUnitIcon color='primary' fontSize='large' />
            <Typography variant='h5'>Personalized Health Coaches</Typography>
          </Stack>
          <CenterTypography variant='body'>Connect with expert health coaches for<br />personalized guidance and support.</CenterTypography>
        </Stack>
        <Stack>
          <Stack direction='row' spacing={2}>
            <AcUnitIcon color='primary' fontSize='large' />
            <Typography variant='h5'>Social Support</Typography>
          </Stack>
          <CenterTypography variant='body'>Join a community of patients like you for support<br />and inspiration.</CenterTypography>
        </Stack>
      </SpaceStack>
      <SpaceStack>
        <Stack>
          <Stack direction='row' spacing={2}>
            <AcUnitIcon color='primary' fontSize='large' />
            <Typography variant='h5'>Expert Guidance</Typography>
          </Stack>
          <CenterTypography variant='body'>Get expert guidance from our team of healthcare<br />professionals, available 24/7.</CenterTypography>
        </Stack>
        <Stack>
          <Stack direction='row' spacing={2}>
            <AcUnitIcon color='primary' fontSize='large' />
            <Typography variant='h5'>Community Meetups</Typography>
          </Stack>
          <CenterTypography variant='body'>Connect with others in your community through<br />regular meetups and events.</CenterTypography>
        </Stack>
        <Stack>
          <Stack direction='row' spacing={2}>
            <AcUnitIcon color='primary' fontSize='large' />
            <Typography variant='h5'>Educational Materials</Typography>
          </Stack>
          <CenterTypography variant='body'>Access a wealth of educational materials to help<br />you better understand your condition and how to<br />manage it effectively.</CenterTypography>
        </Stack>
      </SpaceStack>
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
            <Typography variant='h5'>Stay on top of your health with seamless and consistent care</Typography>
            <Typography variant='body'>Our platform makes it easy to keep track of your health records, symptoms, and progress over time.</Typography>
            <Typography variant='body'>You can share this data with your healthcare team, ensuring that they have the information they need to provide you with the best possible care.</Typography>
            <Typography variant='body'>With Ngoane, you'll have access to personalized care that is informed by your unique health data.</Typography>
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
            <Typography variant='h5'>Stay on track with your treatment with reminders and the right support</Typography>
            <Typography variant='body'>Our platform is designed to help you manage your chronic
condition by providing regular reminders for your medication,
appointments, and other important aspects of your care.</Typography>
            <Typography variant='body'>Our Al-powered health assistant offers personalized guidance and support, empowering you to take an active role in managing your condition and improving your overall health and well-being</Typography>
            <Typography variant='body'>With our platform, you can stay on top of your treatment plan and achieve better health outcomes.</Typography>
          </Stack>
        </CustomStack>
        <CustomStack>
          <Stack spacing={3}>
            <Typography variant='h4' color='primary'>Empower you</Typography>
            <Typography variant='h5'>Take control of your health: Be an active participant in your care</Typography>
            <Typography variant='body'>Our platform puts you in control of your health by providing you with the tools and resources you need to manage your condition effectively.</Typography>
            <Typography variant='body'>With access to expert guidance, personalized coaching, educational materials, and a supportive community of patients like you, you can take an active role in your own care and achieve better health outcomes.</Typography>
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
             src='landing/cash.svg'
             width={96}
             height={96}
             alt="Cash Icon"
           />
          </ImgContainer>
          <CenterTypography variant='h4'>Save Money</CenterTypography>
          <CenterTypography variant='body'>Manage your chronic condition with our platform<br />and reduce costly hospitalizations and emergencies.<br />Save money while improving your health outcomes<br />with the help of our health coaches and other<br />support systems</CenterTypography>
        </StyledPaper>
        <StyledPaper elevation={24}>
         <ImgContainer>
           <StyledImg
             src='landing/self.svg'
             width={96}
             height={96}
             alt="Person Icon"
           />
          </ImgContainer>
          <CenterTypography variant='h4'>Improved quality of life</CenterTypography>
          <CenterTypography variant='body'>Chronic conditions can significantly impact a<br />person's quality of life, and by providing tools and<br />resources to help manage those conditions, our<br />platform can help you feel better and more in<br />control of their health.</CenterTypography>
        </StyledPaper>
        <StyledPaper elevation={24}>
         <ImgContainer>
           <StyledImg
             src='landing/con.svg'
             width={96}
             height={96}
             alt="Convenience Icon"
           />
          </ImgContainer>
          <CenterTypography variant='h4'>Convenience</CenterTypography>
          <CenterTypography variant='body'>Chronic conditions can significantly impact a<br />person's quality of life, and by providing tools and<br />resources to help manage those conditions, our<br />platform can help you feel better and more in<br />control of their health.</CenterTypography>
        </StyledPaper>
      </SpaceStack>
    </StyledStack>
  )
}


const FAQ = () => {
  return (
    <StyledStack spacing={3}>
      <CenterTypography variant='h2'>Frequently Asked Questions (FAQs)</CenterTypography>
      <CenterTypography variant='h5'>Find answers to some common auestions about our Dlatform below</CenterTypography>
        <Accordion>
          <AccordionSummary expandIcon={<ControlPointIcon />} sx={{ flexDirection: 'row-reverse' }}>
            <Typography>What types of chronic conditions are best suited for your platform?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Ngoane is an online platform that allows individuals to easily record and store their emergency<br />health data, and make it available to health professionals in the case of any health emergency. Our<br />platform is designed to give you peace of mind and the assurance that your health information will<br />he readilv accessible in the event of a crisis</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ControlPointIcon />}>
            <Typography>Is technical support available if I have trouble using it?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Ngoane is an online platform that allows individuals to easily record and store their emergency<br />health data, and make it available to health professionals in the case of any health emergency. Our<br />platform is designed to give you peace of mind and the assurance that your health information will<br />he readilv accessible in the event of a crisis</Typography>
          </AccordionDetails>
        </Accordion>
    </StyledStack>
  )
}
