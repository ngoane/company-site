import React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Image from "next/image";

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
            variant="headlineMain"
            component="h2"
            color="accentPink"
            sx={{
              width: "80%",
              marginBottom: "1rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: '700',
              textAlign: 'center'
            }}
          >
            Whoops! Page not found!
          </Typography>
          <Image src="/user/Error 404_Iluustration.svg" width="200" height="200" />
          <Typography
            variant="body"
            sx={{
              textAlign: "center",
              padding: "1rem 0",
            }}
          >
            We are sorry! The page you’re looking for is unavailable
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
              Return to Homepage
            </Button>
            
            
          </Box>
        </Box>
      </Paper>
    </>
  );
};

export default confirmation;
