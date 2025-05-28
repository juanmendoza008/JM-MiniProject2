import React from "react";
import TextField from "@mui/material/TextField";
import { Box, Typography } from "@mui/material";

// NAME OF COMPONENT IS A ARROW FUNCTION

const InputComponent = ({ inputProp }) => {
  // VARIABLES/STATE LIVE HERE

  // FUNCTIONS/EFFECTS LIVE HERE

  // RETURN LIVES HERE
  return (
    <Box
      component="form"
      sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
      noValidate
      autoComplete="off"
    >
      <TextField
        placeholder={inputProp.placeholder}
        type={inputProp.type}
        id={inputProp.field}
        required
        label={inputProp.field}
        name={inputProp.name}
        value={inputProp.value}
        onChange={inputProp.onChange}
      />
    </Box>
  );
};

export default InputComponent;
