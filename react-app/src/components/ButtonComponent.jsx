import React from "react";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import {
  Box,
  Typography,
  InputLabel,
  FormControl,
  Select,
  Stack,
} from "@mui/material";

// NAME OF COMPONENT IS A ARROW FUNCTION

// { name: "AUD", symbol: "$", amount: 1000, imgSource: Aus_Flag },

const ButtonComponent = ({ data }) => {
  // VARIABLES/STATE LIVE HERE

  //Handle Currency Form in Droplist as State
  const [currencyFrom, setCurrencyFrom] = useState(data[0].name);

  // FUNCTIONS/EFFECTS LIVE HERE
  const handleCurrencySelection = (e, type) => {
    let matchedItem = data.find((curr) => curr.name === e.target.value);

    if (matchedItem) {
      if (type === "From") {
        setCurrencyFrom(e.target.value);
      }
    }
  };

  const createDropList = data.map((option) => (
    <MenuItem key={option.name} value={option.name}>
      {option.name}
    </MenuItem>
  ));

  // RETURN LIVES HERE
  return (
    <Box
      component="form"
      sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
      noValidate
      autoComplete="off"
    >
      <FormControl sx={{ m: 1 }}>
        <InputLabel id="currency-From">Currency</InputLabel>
        <Select
          labelId="currency-From"
          id="currency-From"
          value={currencyFrom}
          label="Currency"
          onChange={(e) => handleCurrencySelection(e, "From")}
        >
          {createDropList}
        </Select>
      </FormControl>
    </Box>
  );
};

export default ButtonComponent;
