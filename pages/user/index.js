import CustomTablePagination from "@/components/userUi/tablePagination/CustomTablePagination";
import { StyledTableCell, StyledTable } from "@/styles/globalComponentsStyle";
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";

const index = () => {
  return (
    <>
      <Typography variant="headerMain">Display Here</Typography>
      <TableContainer>
        <StyledTable sx={{ maxWidth: 700 }}>
          <TableHead>
            <TableRow>
              <StyledTableCell>Date</StyledTableCell>
              <StyledTableCell>Time</StyledTableCell>
              <StyledTableCell>Symptom</StyledTableCell>
              <StyledTableCell>Edit</StyledTableCell>
              <StyledTableCell align="center">Delete</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <StyledTableCell>Date</StyledTableCell>
              <StyledTableCell>Time</StyledTableCell>
              <StyledTableCell>Symptom</StyledTableCell>
              <StyledTableCell>Edit</StyledTableCell>
              <StyledTableCell align="center">Delete</StyledTableCell>
            </TableRow>

            <TableRow>
              <StyledTableCell>Date</StyledTableCell>
              <StyledTableCell>Time</StyledTableCell>
              <StyledTableCell>Symptom</StyledTableCell>
              <StyledTableCell>Edit</StyledTableCell>
              <StyledTableCell align="center">Delete</StyledTableCell>
            </TableRow>

            <TableRow>
              <StyledTableCell>Date</StyledTableCell>
              <StyledTableCell>Time</StyledTableCell>
              <StyledTableCell>Symptom</StyledTableCell>
              <StyledTableCell>Edit</StyledTableCell>
              <StyledTableCell align="center">Delete</StyledTableCell>
            </TableRow>

            <TableRow>
              <StyledTableCell>Date</StyledTableCell>
              <StyledTableCell>Time</StyledTableCell>
              <StyledTableCell>Symptom</StyledTableCell>
              <StyledTableCell>Edit</StyledTableCell>
              <StyledTableCell align="center">Delete</StyledTableCell>
            </TableRow>
          </TableBody>
        </StyledTable>
      </TableContainer>
      <CustomTablePagination />
    </>
  );
};

export default index;
