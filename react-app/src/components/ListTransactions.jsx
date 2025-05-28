import * as React from "react";

import Typography from "@mui/material/Typography";
import {
  Avatar,
  Box,
  List,
  Stack,
  ListItem,
  ListItemText,
  ListItemAvatar,
} from "@mui/material";

// category: "Category",
//     debit: 12,
//     description: "Description",
//     date: "2024-12-3",
//     // Key id

const ListTransactions = ({ data }) => {
  // Variables/State

  // Function
  const createCardList = () => {
    if (!data) {
      return <Typography>Not data found</Typography>;
    }
    return (
      <List>
        {data?.map((transaction) => (
          <SingularCard
            key={transaction.id}
            category={transaction.category}
            debit={transaction.debit}
            description={transaction.description}
            date={transaction.transactionDate}
          />
        ))}
      </List>
    );
  };

  const SingularCard = ({ category, debit, description, date }) => {
    return (
      <ListItem>
        <ListItemText
          primary={description}
          secondary={
            <>
              {debit}
              <br />
              {category}
              <br />
              {date}
            </>
          }
        />
      </ListItem>
    );
  };

  //Return
  return <Box>{createCardList()}</Box>;
};

export default ListTransactions;
