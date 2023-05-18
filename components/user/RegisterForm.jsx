import {
  Box,
  Button,
  Link,
  TextField,
  Typography,
  Divider,
  Icon,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Visibility,
  VisibilityOff,
  Stack,
  MenuItem,
  FormControl,
  InputLabel,
  FormControlLabel,
  Checkbox
} from "@mui/material";
import * as React from "react";
import { Google, Facebook } from "@mui/icons-material";
import Select from "@mui/material/Select";

function ResgiterForm() {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1.2rem",
          width: "100%",
        }}
      >
        <Box sx={{ display: "flex", gap: "4%" }}>
          <TextField
            label="First Name"
            sx={{ backgroundColor: "white", width: "48%" }}
          />
          <TextField
            label="Last Name"
            sx={{ backgroundColor: "white", width: "48%" }}
          />
        </Box>
        <Box sx={{ display: "flex", gap: "4%" }}>
          <TextField
            label="Email Address"
            sx={{ backgroundColor: "white", width: "48%" }}
          />
          <TextField
            label="Phone Number"
            sx={{ backgroundColor: "white", width: "48%" }}
          />
        </Box>

        <Box sx={{ display: "flex", gap: "4%" }}>
          <TextField
            type="password"
            label="Password"
            sx={{ backgroundColor: "white", width: "48%" }}
          />
          <TextField
            type="password"
            label="Confirm Password"
            sx={{ backgroundColor: "white", width: "48%" }}
          />
        </Box>

        <Box sx={{ display: "flex", gap: "4%" }}>
          {/* <TextField
            type="select"
            label="Gender"
            sx={{ backgroundColor: "white", width: "48%" }}
          /> */}

          <FormControl fullWidth >
            <InputLabel id="demo-simple-select-label">Gender</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Gender"
              onChange={() => {}}
              sx={{ backgroundColor: "white", width: "100%" }}
            >
              <MenuItem value={10}>Male</MenuItem>
              <MenuItem value={20}>Female</MenuItem>
              <MenuItem value={30}>Refuse to disclose</MenuItem>
            </Select>
          </FormControl>

          <TextField
            type="text"
            label="Profession"
            sx={{ backgroundColor: "white", width: "100%" }}
          />
        </Box>
      </Box>
      <Button
        size="large"
        variant="contained"
        sx={{
          width: "100%",
          marginTop: "2rem",
        }}
      >
        Register
      </Button>

      <Box sx={{ marginTop: "2rem" }}>
      <FormControlLabel required control={<Checkbox />} label="Creating an account means you're okay with our Terms of Service, Privacy
        Policy, and our default Notification Settings." />
        
      </Box>

      <Box
        sx={{
          margin: "3rem 0",
        }}
      >
        <Divider orientation="horizontal" flexItem>
          OR
        </Divider>
      </Box>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "2%",
        }}
      >
        <Button
          size="large"
          variant="outlined"
          onClick={() => {
            // TODO
          }}
          sx={{
            width: "49%",
            padding: "0.5rem 0",
            backgroundColor: "white",
          }}
        >
          <Icon>
            <Google />
          </Icon>
          Sign up with Google
        </Button>
        <Button
          size="large"
          variant="outlined"
          onClick={() => {
            // TODO
          }}
          sx={{
            width: "49%",
            padding: "0.5rem 0",
            backgroundColor: "white",
          }}
        >
          <Icon>
            <Facebook />
          </Icon>
          Sign up with Facebook
        </Button>
      </Stack>
    </div>
  );
}

export default ResgiterForm;
