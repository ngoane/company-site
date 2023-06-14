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
import axios from "axios";
import { useRouter } from "next/router";

function ResgiterForm() {
  const [user, setUser] = React.useState ({firstName: '', lastName: '', email: '', phoneNumber: '', password: '', gender: '', profession: ''});
  const setFirstName = (e) => setUser(value => ({...value, firstName: e.target.value}));
  const setLastName = (e) => setUser(value => ({...value, lastName: e.target.value}));
  const setEmail = (e) => setUser(value => ({...value, email: e.target.value}));
  const setPhoneNumber = (e) => setUser(value => ({...value, phoneNumber: e.target.value}));
  const setPassword = (e) => setUser(value => ({...value, password: e.target.value}));
  const setGender = (e) => setUser(value => ({...value, gender: e.target.value}));
  const setProfession = (e) => setUser(value => ({...value, profession: e.target.value}));

  const router = useRouter();
  const handleSignUp = async (e) => {
    e.preventDefault();
    const BASEURL = process.env.BASE_URL ?? 'http://127.0.0.1:3000/api';
    try {
      await axios.post(`${BASEURL}/auth/signup`, user);
      router.push('/auth/email_verification');
    } catch (err) {
      return {error: 'Couldn"t register user'};
    }
 }

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
            value={user.firstName}
            onChange={setFirstName}
          />
          <TextField
            label="Last Name"
            sx={{ backgroundColor: "white", width: "48%" }}
            value={user.lastName}
            onChange={setLastName}
          />
        </Box>
        <Box sx={{ display: "flex", gap: "4%" }}>
          <TextField
            label="Email Address"
            sx={{ backgroundColor: "white", width: "48%" }}
            value={user.email}
            onChange={setEmail}
          />
          <TextField
            label="Phone Number"
            sx={{ backgroundColor: "white", width: "48%" }}
            value={user.phoneNumber}
            onChange={setPhoneNumber}
          />
        </Box>

        <Box sx={{ display: "flex", gap: "4%" }}>
          <TextField
            type="password"
            label="Password"
            sx={{ backgroundColor: "white", width: "48%" }}
            value={user.password}
            onChange={setPassword}
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
              value={user.gender}
              onChange={setGender}
              sx={{ backgroundColor: "white", width: "100%" }}
            >
              <MenuItem value={'Male'}>Male</MenuItem>
              <MenuItem value={'Female'}>Female</MenuItem>
              <MenuItem value={'Refuse to disclose'}>Refuse to disclose</MenuItem>
            </Select>
          </FormControl>

          <TextField
            type="text"
            label="Profession"
            sx={{ backgroundColor: "white", width: "100%" }}
            value={user.profession}
            onChange={setProfession}
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
        onClick={handleSignUp}
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
