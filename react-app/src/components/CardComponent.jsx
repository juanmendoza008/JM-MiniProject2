import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { Avatar, Stack, Box, List } from "@mui/material";
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
      <Card
        sx={{
          width: "300px",
          marginX: "auto",
          backgroundColor: "rgba(0, 0, 0, 0.1)",
          spacing: "10px",
        }}
      >
        <CardActionArea>
          <CardContent>
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
          </CardContent>
        </CardActionArea>
      </Card>
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
