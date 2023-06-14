import React, { useState } from "react";
import { Typography, Card, Box, Paper, Button } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableContainer,
  TableHead,
  TextField,
} from "@mui/material";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import dayjs from "dayjs";
import axios from "axios";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Fri, 12/02/2023", "12:00 am", "Severe headache", "", ""),
  createData("Fri, 12/02/2023", "12:00 am", "Severe headache", "", ""),
  createData("Fri, 12/02/2023", "12:00 am", "Severe headache", "", ""),
  createData("Fri, 12/02/2023", "12:00 am", "Severe headache", "", ""),
  createData("Fri, 12/02/2023", "12:00 am", "Severe headache", "", ""),
];

let symptomRecords = {
  symptom: "",
  date: "",
  time: "",
  trigger: "",
  feeling: "",
};

function symptom_tracker({ symptoms }) {
  const [symptomRecord, setSymptomRecord] = useState(symptomRecords);

  // make a post request to 'localhost:3000/api/user'

  const handleTextFieldChange = (e) => {
    setSymptomRecord((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const handleDateTimeChange = (value, name) => {
    if (name === "date") {
      value = dayjs(value.$d).format("MM/DD/YYYY");
    } else {
      value = dayjs(value.$d).format("hh:mm a");
    }
    setSymptomRecord((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const sendRecord = async () => {
    // console.log(symptomRecord);
    const response = await axios.post(
      "http://localhost:3000/api/symptom",
      symptomRecord
    );
  };

  return (
    <>
      {console.log("sysmtom init state :", symptomRecord)}
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Typography variant="headlineMainBold" sx={{ marginBottom: "1.5rem" }}>
          SYMPTOM TRACKER
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "row", gap: "2rem" }}>
          <Card
            sx={{
              width: "60%",
              height: "auto",
              padding: "1.5rem",
            }}
          >
            <Typography variant="titleBold">SYMPTOMS RECORDED</Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "2rem",
                padding: "1rem 2rem",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography>February, 2023</Typography>

              <DatePicker
                label="Select Month"
                openTo="month"
                views={["year", "month"]}
                size="small"
                sx={{ width: "70%", alignContent: "flex-end" }}
              />
            </Box>

            <TableContainer component={Paper} sx={{ padding: "2rem" }}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell align="right">Time</TableCell>
                    <TableCell align="right">Symptom</TableCell>
                    <TableCell align="right">Edit</TableCell>
                    <TableCell align="right">Delete</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.calories}</TableCell>
                      <TableCell align="right">{row.fat}</TableCell>
                      <TableCell align="right">{row.carbs}</TableCell>
                      <TableCell align="right">{row.protein}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Card>
          <Card
            sx={{
              width: "30%",
              height: "auto",
              padding: "1.5rem",
            }}
          >
            <Paper sx={{ padding: "1.5rem" }}>
              <Typography variant="titleBold" sx={{ paddingBottom: "1rem" }}>
                RECORD A SYMPTOM
              </Typography>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Symptom</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Age"
                  name="symptom"
                  onChange={(e) => handleTextFieldChange(e)}
                >
                  {symptoms.map((symptom) => (
                    <MenuItem key={symptom.id} value={symptom.name}>
                      {symptom.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl sx={{ paddingTop: "1rem", width: "100%" }}>
                <DatePicker
                  label="Date"
                  openTo="day"
                  views={["year", "month", "day"]}
                  onChange={(v) => handleDateTimeChange(v, "date")}
                />
              </FormControl>
              <FormControl sx={{ paddingTop: "1rem", width: "100%" }}>
                <TimePicker
                  label="Time"
                  onChange={(v) => handleDateTimeChange(v, "time")}
                />
              </FormControl>
              <FormControl sx={{ paddingTop: "1rem", width: "100%" }}>
                <TextField
                  id="outlined-basic"
                  label="Possible Trigger"
                  variant="outlined"
                  multiline
                  rows={1}
                  name="trigger"
                  onChange={(e) => handleTextFieldChange(e)}
                />
              </FormControl>
              <FormControl sx={{ paddingTop: "1rem", width: "100%" }}>
                <TextField
                  id="outlined-basic"
                  label="How do you feel?"
                  variant="outlined"
                  multiline
                  rows={3}
                  name="feeling"
                  onChange={(e) => handleTextFieldChange(e)}
                />
              </FormControl>

              <FormControl
                sx={{
                  paddingTop: "1rem",
                  width: "100%",
                  paddingBottom: "1rem",
                }}
              >
                <Button variant="contained" onClick={sendRecord}>
                  Record
                </Button>
              </FormControl>
            </Paper>
          </Card>
        </Box>
      </LocalizationProvider>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/symptom");
  const symptoms = await res.json();
  // console.log(symptoms);
  return {
    props: {
      symptoms,
    },
  };
}

export default symptom_tracker;
