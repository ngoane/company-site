import React from "react";
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

const CustomTable = () => {
  return (
    <>
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

export default CustomTable;
