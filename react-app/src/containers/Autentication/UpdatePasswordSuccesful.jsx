import { Box, Typography } from "@mui/material";
import MTLogo from "../../assets/images/MT-logo.jpg";

const RegistrationSuccesful = () => {
  // VARIABLES/STATE LIVE HERE

  // FUNCTIONS/EFFECTS LIVE HERE

  // RETURN LIVES HERE
  return (
    <Box>
      <img src={MTLogo} alt="MT Logo" />
      <Typography>Updated Password Succesful!!!.</Typography>
      <Typography>
        Go back to
        <a href="/">Login Page</a>
      </Typography>
    </Box>
  );
};

export default RegistrationSuccesful;
