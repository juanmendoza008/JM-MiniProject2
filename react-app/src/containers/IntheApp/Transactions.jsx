import { Box, Typography, TextField } from "@mui/material";
import { useState, useEffect } from "react";
import { useQuery } from "../../hooks/useQuery";
import ListTransactions from "../../components/ListTransactions";
import Card from "../../assets/images/Card.jpeg";

// {
//   category: "Category",
//   debit: 12,
//   description: "Description",
//   date: "2024-12-3",
//   // Key id
// },

const Transactions = () => {
  // Variables

  //Fetch Transactions
  const [data, isLoading] = useQuery(
    "https://api.sampleapis.com/fakebank/accounts"
  );
  // console.log("data", data);
  const lastTwentyTransactions = data ? data.slice(0, 20) : [];
  //console.log("lastTwentyTransactions", lastTwentyTransactions);
  const dataTransactions = lastTwentyTransactions;

  //Field text
  const [searchText, setSearchText] = useState("");

  // FUNCTIONS/EFFECTS LIVE HERE
  const dataHandlingFilter = () => {
    const dataFilter = dataTransactions.filter((transaction) => {
      if (searchText && searchText.length >= 3) {
        return (
          transaction.category
            .toLocaleUpperCase()
            .includes(searchText.toLocaleUpperCase()) ||
          transaction.description
            .toLocaleUpperCase()
            .includes(searchText.toLocaleUpperCase())
        );
      }
      return true;
    });

    return dataFilter;
  };

  //Handle Filter
  const searchFieldHandler = (e) => {
    setSearchText(e.target.value);
  };

  // RETURN LIVES HERE
  return (
    <Box
      position="relative"
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
      <img
        src={Card}
        alt="Card"
        style={{
          width: "80%",
          marginTop: "10px",
        }}
      />

      <Typography
        position="absolute"
        top="30%"
        left="15%"
        color="white"
        style={{
          fontWeight: "bold",
          textShadow: "1px 1px 2px black",
        }}
      >
        1234 5678 9012 3456
      </Typography>

      <Typography
        position="absolute"
        top="35%"
        left="15%"
        color="white"
        style={{
          fontWeight: "bold",
          textShadow: "1px 1px 2px black",
        }}
      >
        01/29
      </Typography>

      <Typography
        position="absolute"
        top="40%"
        left="15%"
        color="white"
        style={{
          fontWeight: "bold",
          textShadow: "1px 1px 2px black",
        }}
      >
        111
      </Typography>

      <Box mt={2}>
        <TextField
          label="Search Transaction"
          variant="standard"
          onChange={searchFieldHandler}
        />

        <ListTransactions data={dataHandlingFilter()} />
      </Box>
    </Box>
  );
};

export default Transactions;
