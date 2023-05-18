import React from "react";
import { FilterContainer, FilterItemBox, SearchItemBox } from "./blogStyles";
import { MenuItem, Typography, InputAdornment, TextField } from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
const BlogFilterBox = () => {
  return (
    <FilterContainer direction={"row"} spacing={4}>
      {/* filter for Categories  */}
      <FilterItemBox spacing={1}>
        <Typography variant="caption">CATEGORY</Typography>
        <TextField select size="small">
          <MenuItem value={"Categories"}> Categories</MenuItem>
        </TextField>
      </FilterItemBox>

      {/* filter for year */}
      <FilterItemBox spacing={1}>
        <Typography variant="caption">FILTER BY</Typography>
        <TextField select size="small">
          <MenuItem value={"April 2023"}> April 2023</MenuItem>
        </TextField>
      </FilterItemBox>

      {/* search filter */}
      <SearchItemBox elevation={1}>
        <TextField
          fullWidth
          size="small"
          placeholder="SEARCH"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchRoundedIcon />
              </InputAdornment>
            ),
          }}
        />
      </SearchItemBox>
    </FilterContainer>
  );
};

export default BlogFilterBox;
