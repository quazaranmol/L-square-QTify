import React, { useState } from 'react';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import logo from "../Logo.svg";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";

export default function Header() {
  const [searchValue, updateSearchValue] = useState("");

  const search = ()=>{
    console.log(searchValue, "needs to be searched");
  }

  return (
    <Box
      sx={{
        padding: "0.5rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "2rem",
        backgroundColor: "#34C94B",
      }}
    >
      <img src={logo} alt="Logo" />
      <Box
        sx={{
          width: "50%",
          height: "2rem",
          display: "flex",
          alignItems: "center",
        }}
      >
        <TextField
          value={searchValue}
          onChange={(e) => {
            updateSearchValue(e.target.value);
          }}
          fullWidth
          size="small"
          margin="none"
          sx={{
            backgroundColor: "white",
            borderRadius: "0.5rem 0 0 0.5rem",
          }}
          id="search"
          placeholder="Search for a song of your choice."
          variant="outlined"
        />
        <Button
        onClick={search}
          sx={{
            backgroundColor: "white",
            borderRadius: "0 0.5rem 0.5rem 0",
            height: "2.6rem",
            "&:hover": {
              backgroundColor: "#ebebeb",
            },
          }}
          variant="outlined"
        >
          <SearchIcon />
        </Button>
      </Box>
      <Button variant="contained">Give Feedback</Button>
    </Box>
  );
}
