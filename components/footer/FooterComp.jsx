import React from "react";
import {
  FooterContainer,
  FooterTopContainer,
  FooterLogo,
  FooterBottomContainer,
  FooterLinkContainer,
  FooterEmailTextField,
} from "./footerStyle";
import { Box, Divider, List, ListItem, Stack, Typography } from "@mui/material";
import { FooterNavLink, CustomButton } from "@/styles/globalComponentsStyle";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const FooterComp = () => {
  return (
    <>
      <FooterContainer>
        <FooterTopContainer>
          {/* Footer logo section */}
          <Box>
            <FooterLogo src="/logos/footerLogo.png" />
            <Typography variant="body" width={"22rem"}>
              Effortlessly track symptoms, communicate with providers, and
              access information
            </Typography>
          </Box>
          {/* Footer Link for product */}
          <Box>
            <Typography variant="title" color={"primary"}>
              Product
            </Typography>
            <List>
              <ListItem disableGutters>
                <FooterNavLink href={"#"}>Features</FooterNavLink>
              </ListItem>
              <ListItem disableGutters>
                <FooterNavLink href={"#"}>Case Studies</FooterNavLink>
              </ListItem>
              <ListItem disableGutters>
                <FooterNavLink href={"#"}>Health Tools</FooterNavLink>
              </ListItem>
            </List>
          </Box>
          {/* Footer Link for Company */}
          <Box>
            <Typography variant="title" color={"primary"}>
              Company
            </Typography>
            <List>
              <ListItem disableGutters>
                <FooterNavLink href={"#"}>About</FooterNavLink>
              </ListItem>
              <ListItem disableGutters>
                <FooterNavLink href={"#"}>Contact Us</FooterNavLink>
              </ListItem>
              <ListItem disableGutters>
                <FooterNavLink href={"#"}>Blog</FooterNavLink>
              </ListItem>
            </List>
          </Box>
          {/* Footer Link for Support */}
          <Box>
            <Typography variant="title" color={"primary"}>
              Support
            </Typography>
            <List>
              <ListItem disableGutters>
                <FooterNavLink href={"#"}>Gettig Started</FooterNavLink>
              </ListItem>
              <ListItem disableGutters>
                <FooterNavLink href={"#"}>Help Centre</FooterNavLink>
              </ListItem>
              <ListItem disableGutters>
                <FooterNavLink href={"#"}>Chat Support</FooterNavLink>
              </ListItem>
              <ListItem disableGutters>
                <FooterNavLink href={"#"}>Report a Bug</FooterNavLink>
              </ListItem>
            </List>
          </Box>
          {/* Footer Link for Downloads */}
          <Box>
            <Typography variant="title" color={"primary"}>
              Downloads
            </Typography>
            <List>
              <ListItem disableGutters>
                <FooterNavLink href={"#"}>iOS</FooterNavLink>
              </ListItem>
              <ListItem disableGutters>
                <FooterNavLink href={"#"}>Android</FooterNavLink>
              </ListItem>
            </List>
          </Box>
        </FooterTopContainer>
        <FooterBottomContainer>
          <FooterLinkContainer>
            <FacebookIcon color="primary" />
            <TwitterIcon color="primary" />
            <InstagramIcon color="primary" />
            <YouTubeIcon color="primary" />
          </FooterLinkContainer>

          <Stack direction={"row"} spacing={2} width={"60%"}>
            <FooterEmailTextField
              placeholder="ENTER YOUR EMAIL ADDRESS"
              size="small"
            />
            <CustomButton variant="contained">Subscribe</CustomButton>
          </Stack>
        </FooterBottomContainer>
        <Divider />
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
          spacing={2}
          paddingTop={"2rem"}
        >
          <Typography variant="caption">
            Copyright © 2023 Ngoane PHR | All Rights Reserved
          </Typography>
          <Typography variant="caption">
            Terms and Conditions | Privacy Policy
          </Typography>
        </Stack>
      </FooterContainer>
    </>
  );
};

export default FooterComp;
