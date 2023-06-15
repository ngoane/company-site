import React, { useState, useEffect } from "react";
import { Typography, Card, Box, Paper, Button, CircularProgress } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

import { Table, TableBody, TableCell, TableRow, TableContainer, TableHead, TextField, FormControl, InputLabel, MenuItem, Select, FormHelperText } from "@mui/material";
import dayjs from "dayjs";
import axios from "axios";
import { toast } from "react-toastify";


function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}


const initialSymptomRecord = {
  symptomId: "",
  date: "",
  time: "",
  possibleTrigger: "",
  howYouFeel: "",
};


function SymptomTracker({  symptoms }) {
  const [symptomRecord, setSymptomRecord] = useState(initialSymptomRecord);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});
  const [symptomRecords, setSymptomRecords] = useState([]);

  const handleTextFieldChange = (e) => {
    setSymptomRecord((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleDateTimeChange = (value, name) => {
    const formattedValue = name === "date" ? dayjs(value.$d).format("MM/DD/YYYY") : dayjs(value.$d).format("hh:mm a");
    setSymptomRecord((prevState) => ({
      ...prevState,
      [name]: formattedValue,
    }));
  };

  const sendRecord = async () => {

    console.log(symptomRecord);
    // const response = await axios.post(
    //   "http://localhost:3000/api/symptom_trackers",
    //   symptomRecord
    // );

    // Perform field validation
    let isValid = true;
    const errors = {};

    if (!symptomRecord.symptomId) {
      errors.symptomId = "Symptom is required";
      isValid = false;
    }

    if (!symptomRecord.date) {
      errors.date = "Date is required";
      isValid = false;
    }

    if (!symptomRecord.time) {
      errors.time = "Time is required";
      isValid = false;
    }

    if (!symptomRecord.possibleTrigger) {
      errors.possibleTrigger = "Possible trigger is required";
      isValid = false;
    }

    if (!symptomRecord.howYouFeel) {
      errors.howYouFeel = "How do you feel is required";
      isValid = false;
    }

    if (!isValid) {
      setValidationErrors(errors);
      return;
    }

    setIsSubmitting(true);
    try {
      await axios.post("http://localhost:3000/api/symptom_trackers", symptomRecord);
      toast.success("Symptom recorded successfully");
      setSymptomRecord(initialSymptomRecord);
      fetchSymptomRecords(); // Refresh the symptom records after a new record is added
    } catch (error) {
      console.log(error);
      toast.error("An error occurred while recording the symptom");
    } finally {
      setIsSubmitting(false);
    }

  };

  const fetchSymptomRecords = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/symptom_trackers");
      setSymptomRecords(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSymptomRecords(); // Fetch symptom records when the component mounts
  }, []);

  const deleteRecord = async (id) => {
    if (window.confirm("Are you sure you want to delete this record?")) {
      try {
        await axios.delete(`http://localhost:3000/api/symptom_trackers?id=${id}`);
        toast.success("Symptom record deleted successfully");
        fetchSymptomRecords(); // Refresh the symptom records after a record is deleted
      } catch (error) {
        console.log(error.response.data);
        toast.error("An error occurred while deleting the symptom record");
      }
    }


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
                  {symptomRecords.map((record) => (
                    <TableRow key={record.id}>
                      <TableCell component="th" scope="row">
                        {dayjs(record.date).format("YYYY-MM-DD")}
                      </TableCell>
                      <TableCell align="right">{record.time}</TableCell>
                      <TableCell align="right">{record.symptomId.name}</TableCell>
                      <TableCell align="right">Edit</TableCell>
                      <TableCell align="right">
                        <Button variant="outlined" color="error" onClick={() => deleteRecord(record._id)}>
                          Delete
                        </Button>
                      </TableCell>
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
              <FormControl fullWidth error={!!validationErrors.symptomId}>
                <InputLabel id="demo-simple-select-label">Symptom</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Age"

                  name="symptomId"
                  onChange={handleTextFieldChange}
                  value={symptomRecord.symptom}

                >
                  {symptoms.map((symptom) => (
                    <MenuItem key={symptom._id} value={symptom._id}>
                      {symptom.name}
                    </MenuItem>
                  ))}
                </Select>
                <FormHelperText>{validationErrors.symptomId}</FormHelperText>
              </FormControl>
              <FormControl fullWidth error={!!validationErrors.date} sx={{ paddingTop: "1rem" }}>
                <DatePicker
                  label="Date"
                  openTo="day"
                  views={["year", "month", "day"]}
                  onChange={(v) => handleDateTimeChange(v, "date")}

                  value={symptomRecord.date}

                />
                <FormHelperText>{validationErrors.date}</FormHelperText>
              </FormControl>

              <FormControl fullWidth error={!!validationErrors.time} sx={{ paddingTop: "1rem" }}>
                <TimePicker
                  label="Time"
                  onChange={(v) => handleDateTimeChange(v, "time")}
                  value={symptomRecord.time}
                />
                <FormHelperText>{validationErrors.time}</FormHelperText>

              </FormControl>
              <FormControl fullWidth error={!!validationErrors.possibleTrigger} sx={{ paddingTop: "1rem" }}>
                <TextField
                  id="outlined-basic"
                  label="Possible Trigger"
                  variant="outlined"
                  multiline
                  rows={1}

                  name="possibleTrigger"
                  onChange={handleTextFieldChange}
                  value={symptomRecord.possibleTrigger}

                />
                <FormHelperText>{validationErrors.possibleTrigger}</FormHelperText>
              </FormControl>
              <FormControl fullWidth error={!!validationErrors.howYouFeel} sx={{ paddingTop: "1rem" }}>
                <TextField
                  id="outlined-basic"
                  label="How do you feel?"
                  variant="outlined"
                  multiline
                  rows={3}

                  name="howYouFeel"
                  onChange={handleTextFieldChange}
                  value={symptomRecord.howYouFeel}

                />
                <FormHelperText>{validationErrors.howYouFeel}</FormHelperText>
              </FormControl>

              <FormControl
                sx={{
                  paddingTop: "1rem",
                  width: "100%",
                  paddingBottom: "1rem",
                }}
              >
                <Button variant="contained" onClick={sendRecord}>

                  {isSubmitting ? <CircularProgress size={24} /> : "Record"}

                </Button>
              </FormControl>
            </Paper>
          </Card>
        </Box>
      </LocalizationProvider>
    </>
  );
}
}

export async function getServerSideProps() {
  try {
    const response = await axios.get("http://localhost:3000/api/symptom_trackers");
    const symptomRecords = response.data;
    const res = await axios.get("http://localhost:3000/api/symptom");
    const symptoms = await res.data;

    return {
      props: {
        symptomRecords,
        symptoms,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        symptomRecords: [],
        symptoms: [],
      },
    };
  }
}


export default SymptomTracker;
