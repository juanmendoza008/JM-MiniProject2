import * as React from "react";
import {
  Avatar,
  Stack,
  Box,
  List,
  Button,
  Card,
  CardContent,
  Typography,
  CardActionArea,
} from "@mui/material";
import MT_logo from "../assets/images/MT-logo.jpg";

const CustomCard = ({ data }) => {
  // Variables/State

  // Function
  const createCardList = () => {
    if (!data) {
      return <Typography>Not data found</Typography>;
    }
    return (
      <List>
        {data?.map((currency) => (
          <SingularCard
            key={currency.name}
            name={currency.name}
            amount={currency.amount}
            symbol={currency.symbol}
            imgSource={currency.imgSource ? currency.imgSource : MT_logo}
          />
        ))}
      </List>
    );
  };

  const SingularCard = ({ name, amount, symbol, imgSource }) => {
    return (
      <Button
        sx={{
          width: "300px",
          marginX: "auto",
          backgroundColor: "rgba(0, 0, 0, 0.1)",
          textAlign: "left",
          padding: "10px",
          color: "black",
        }}
      >
        <Stack direction={"row"} spacing={2}>
          <Avatar alt="Flag" src={imgSource} />
          <Stack>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2">
              {symbol} {amount.toLocaleString()}
            </Typography>
          </Stack>
        </Stack>
      </Button>
    );
  };

  //Return
  return (
    <Box>
      <Typography variant="h5">Currencies</Typography>
      {createCardList()}
    </Box>
  );
};

export default CustomCard;
