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
  Button,
} from "@mui/material";

// NAME OF COMPONENT IS A ARROW FUNCTION

const ExchaComponent = ({ data }) => {
  // VARIABLES/STATE LIVE HERE

  //Handle Symbol is Text Field as State

  //Handle value in text Field

  //Handle Currency Form in Droplist as State
  const [currencyFrom, setCurrencyFrom] = useState(data[0].name);
  const [currencyTo, setCurrencyTo] = useState(data[1].name);
  //Handle Symbol is Text Field as State
  const [currencySymbolFrom, setCurrencySymbolFrom] = useState(data[0].symbol);
  const [currencySymbolTo, setCurrencySymbolTo] = useState(data[1].symbol);
  //Handle Amount [exchange From]
  const [amountOne, setAmountOne] = useState(0);
  const [amountTwo, setAmountTwo] = useState(0);

  //Account information
  const [accountOne, setAccountOne] = useState(data[0].amount);
  const [accountTwo, setAccountTwo] = useState(data[1].amount);

  // FUNCTIONS/EFFECTS LIVE HERE
  const handleCurrencySelection = (e, type) => {
    let matchedItem = data.find((curr) => curr.name === e.target.value);

    if (matchedItem) {
      if (type === "From") {
        setCurrencyFrom(e.target.value);
        setCurrencySymbolFrom(matchedItem.symbol);
      } else if (type === "To") {
        setCurrencyTo(e.target.value);
        setCurrencySymbolTo(matchedItem.symbol);
      }
    }
  };

  const createDropList = data.map((option) => (
    <MenuItem key={option.name} value={option.name}>
      {option.name}
    </MenuItem>
  ));

  const calculatorExchangeRate = (FromName, ToName) => {
    const FromValue = data.find((curr) => curr.name === FromName)?.value;
    const ToValue = data.find((curr) => curr.name === ToName)?.value;
    const ExchangeRate = (FromValue / ToValue).toFixed(4);
    return ExchangeRate;
  };

  const transformValue = (amount, exchangeRate) => {
    const transformValue = (amount * exchangeRate).toFixed(2);
    return transformValue;
  };

  const exchangeMoney = () => {
    let ValueOne = data.find((curr) => curr.name === currencyFrom)?.amount;
    let ValueTwo = data.find((curr) => curr.name === currencyTo)?.amount;

    setAccountOne(ValueOne - amountOne);
    setAccountTwo(ValueTwo + Number(amountTwo));
  };

  // RETURN LIVES HERE
  return (
    <Box
      component="form"
      sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
      noValidate
      autoComplete="off"
    >
      <Typography> From </Typography>
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
      <TextField
        sx={{ m: 1 }}
        id="outlined-basic"
        placeholder={currencySymbolFrom}
        label="Amount"
        variant="outlined"
        value={amountOne}
        onChange={(e) => {
          const inputValue = e.target.value;
          setAmountOne(inputValue);
          const exchangeRate = calculatorExchangeRate(currencyFrom, currencyTo);
          setAmountTwo(transformValue(inputValue, exchangeRate));
        }}
      />
      <Box sx={{ my: 2 }} />

      <Typography> Exchange Rate </Typography>
      {calculatorExchangeRate(currencyFrom, currencyTo)}

      <Box sx={{ my: 2 }} />
      <Typography> To </Typography>
      <FormControl sx={{ m: 1 }}>
        <InputLabel id="currency-To">Currency</InputLabel>
        <Select
          labelId="currency-To"
          id="currency-To"
          value={currencyTo}
          label="Currency"
          onChange={(e) => handleCurrencySelection(e, "To")}
        >
          {createDropList}
        </Select>
      </FormControl>
      <TextField
        sx={{ m: 1 }}
        id="outlined-basic"
        placeholder={currencySymbolFrom}
        label="Amount"
        variant="outlined"
        value={amountTwo}
        onChange={(e) => setAmountTwo(e.target.value)}
      />

      {/* <TextField
        sx={{ m: 1 }}
        id="outlined-basic"
        placeholder={currencySymbolTo}
        label="Amount"
        variant="outlined"
        value={amountValue}
        onChange={putValueinTextField}
      /> */}
      <br></br>
      <Button onClick={exchangeMoney}>Exchange</Button>

      <Typography>
        <>
          Account One: {accountOne}
          <br></br>
          Account Two: {accountTwo}
        </>
      </Typography>
    </Box>
  );
};

export default ExchaComponent;
