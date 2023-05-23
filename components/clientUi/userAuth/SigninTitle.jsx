import React from "react";
import { Typography, Box, Divider, Stack } from "@mui/material";
import Icon from "@mui/material/Icon";
import Link from "next/link";

function SigninTitle({ title, question, cta }) {
  const url =
    cta === "Register" ? "/ngoane/auth/register" : "/ngoane/auth/login";
  return (
    <div className="formTitle">
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "1rem",
          marginBottom: "2rem",
        }}
      >
        <Typography
          variant="headerHuge"
          component="h2"
          color="#9138e8"
          sx={{
            width: "90%",
          }}
        >
          {title}{" "}
        </Typography>
        <Divider orientation="vertical" flexItem />
        <Box sx={{ width: "100%" }}>
          <Typography
            variant="headlineMainBold"
            sx={{
              width: "100%",
              marginBottom: "1rem",
            }}
          >
            {question}{" "}
          </Typography>
          <Link
            href={url}
            underline="none"
            sx={{ fontSize: "1.5rem", fontWeight: "bold" }}
          >
            {cta}
            <Icon></Icon>
          </Link>
        </Box>
      </Stack>
    </div>
  );
}

export default SigninTitle;
