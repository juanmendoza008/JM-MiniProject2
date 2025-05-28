import { Box, Typography, TextField } from "@mui/material";
import ExchaComponent from "../../components/ExchaComponent";
import { getAccountData } from "./HomeBase";
import { useQuery } from "../../hooks/useQuery";

const account = [
  {
    name: "AUD",
    symbol: "$",
    value: 0.57,
    amount: 500,
    //imgSource: Aus_Flag,
  },
  {
    name: "EUR",
    symbol: "€",
    value: 1,
    amount: 1000,
    //imgSource: "../../assets/images/Europe_Flag.png",
  },
  {
    name: "GBP",
    symbol: "£",
    value: 1.17,
    amount: 2000,
    //imgSource: "../../assets/images/GBP_Flag.png",
  },
  {
    name: "CHF",
    symbol: "CHF",
    value: 1.07,
    amount: 3000,
    //imgSource: "../../assets/images/SWI_Flag.png",
  },
];

const ExcRate = () => {
  const [accountCurrency] = useQuery("http://localhost:3008/account/");
  console.log(accountCurrency);
  // VARIABLES/STATE LIVE HERE

  // FUNCTIONS/EFFECTS LIVE HERE

  // RETURN LIVES HERE
  return (
    <Box
      sx={{
        padding: "16px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        maxWidth: "1000px",
        margin: "0 auto",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#fff",
      }}
    >
      <Typography>ExcRate </Typography>
      {accountCurrency ? (
        <ExchaComponent data={accountCurrency} />
      ) : (
        <Box>Loading</Box>
      )}
    </Box>
  );
};

export default ExcRate;
