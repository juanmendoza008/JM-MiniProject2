import { Box, Typography, Button } from "@mui/material";
import { useQuery } from "../../hooks/useQuery";
import { useState } from "react";
import CardComponent from "../../components/CardComponent";
import ListTransactions from "../../components/ListTransactions";

export const getAccountData = () => {
  const [accountCurrency, isCargando] = useQuery(
    "http://localhost:3008/account/"
  );
  const dataAccount = accountCurrency ? accountCurrency : [];
  console.log("dataAccount", dataAccount);
  return dataAccount;
};

const HomeBase = () => {
  // VARIABLES/STATE LIVE HERE

  // //Fetch
  // //Account Currency
  // const [accountCurrency, isCargando] = useQuery(
  //   "http://localhost:3008/account/"
  // );

  // const dataAccount = accountCurrency ? accountCurrency : [];

  //Transactions
  const [data, isLoading] = useQuery(
    "https://api.sampleapis.com/fakebank/accounts"
  );
  // Last 8 Transactions
  const lastTransactions = data ? data.slice(0, 3).reverse() : [];
  const dataTransactions = lastTransactions;

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
      <CardComponent data={getAccountData()} />

      <Typography variant="h6" gutterBottom style={{ marginTop: "16px" }}>
        Last Transactions
      </Typography>
      <ListTransactions data={dataTransactions} />
    </Box>
  );
};

export default HomeBase;
