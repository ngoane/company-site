import { Stack } from "@mui/material";
import { AboutApproach, AboutGoal, AboutInfo, AboutIntro, AboutStory, AboutTeam } from "@/components/clientUi/about/About";

const About = () => {
  return (
    <Stack spacing={8}>
      <AboutIntro />
      <AboutInfo />
      <AboutGoal />
      <AboutStory />
      <AboutApproach />
      <AboutTeam />
    </Stack>
  );
};


export default About;
