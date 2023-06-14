import React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { CustomButton } from "@/styles/globalComponentsStyle";

const confirmation = () => {
  return (
    <>
      <Paper
        sx={{
          display: "flex",
          width: "50vw",
          height: "65vh",
          margin: "10rem auto",
        }}
      >
        <Box
          sx={{
            margin: "5rem auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="headerHuge"
            component="h2"
            color="#9138e8"
            sx={{
              width: "100%",
              marginBottom: "1rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: '700'
            }}
          >
            Success
          </Typography>
          <Image src="/user/Confirm__Ellipse.svg" width="100" height="100" />
          <Typography
            variant="body"
            sx={{
              textAlign: "center",
              padding: "2rem 0",
            }}
          >
            You've successfully created an account with us
          </Typography>
          
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "2%",
            }}
          >
            <Button
              variant="contained"
              sx={{
                width: "100%",
                marginTop: "2rem",
                padding: '0.5rem 3rem 0.5rem 3rem'
              }}
            >
              Login
            </Button>
            <Button
              variant="contained"
              sx={{
                width: "100%",
                marginTop: "2rem",
                backgroundColor: "#C4C2C6",
                color: '#222',
                padding: '0.5rem 3rem 0.5rem 3rem'
              }}
            >
              Cancel
            </Button>
            
          </Box>
        </Box>
      </Paper>
    </>
  );
};

export default confirmation;
