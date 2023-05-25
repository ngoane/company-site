import React, { useState } from "react";
import {
  NumberBox,
  PaginationButton,
  TableIconBox,
  TablePaginationBox,
  TablePaginationContainer,
} from "./tablePaginationStyles";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const CustomTablePagination = () => {
  const [activeBtn, setActiveBtn] = useState("");
  const [pageNum, setPageNum] = useState(1);

  const changeActiveBtn = (name) => {
    setActiveBtn(name);
  };

  const nextPage = () => {
    if (pageNum === 10) {
      return;
    }
    setPageNum((prev) => prev + 1);
  };

  const prevPage = () => {
    if (pageNum === 1) {
      return;
    }
    setPageNum((prev) => prev - 1);
  };
  return (
    <>
      <TablePaginationContainer elevation={10} sx={{ maxWidth: 700 }}>
        <TablePaginationBox direction={"row"}>
          <PaginationButton
            variant={activeBtn === "previous" ? "contained" : "outlined"}
            size="small"
            startIcon={
              <TableIconBox active={activeBtn === "previous"}>
                <NavigateBeforeIcon style={{ fontSize: "0.8rem" }} />
              </TableIconBox>
            }
            onClick={() => {
              changeActiveBtn("previous");
              prevPage();
            }}
          >
            previous
          </PaginationButton>

          <NumberBox>
            Page <span style={{ color: "red" }}>{`${pageNum}`}</span> of{" "}
            <span>10</span>
          </NumberBox>

          <PaginationButton
            variant={activeBtn === "next" ? "contained" : "outlined"}
            size="small"
            endIcon={
              <TableIconBox active={activeBtn === "next"}>
                <NavigateNextIcon style={{ fontSize: "0.8rem" }} />
              </TableIconBox>
            }
            onClick={() => {
              changeActiveBtn("next");
              nextPage();
            }}
          >
            next
          </PaginationButton>
        </TablePaginationBox>
      </TablePaginationContainer>
    </>
  );
};

export default CustomTablePagination;
