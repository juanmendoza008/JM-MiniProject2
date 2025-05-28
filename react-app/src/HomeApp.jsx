import { Box } from "@mui/material";
import { Container } from "@mui/material";
import HeaderNavbar from "./components/HeaderNavbar";
import { UserProvider } from "./stores/userStore";
import { DataProvider } from "./stores/dataStore";
import HomeAppRoutes from "./HomeAppRoutes";

const HomeApp = () => {
  // VARIABLES/STATE LIVE HERE

  // FUNCTIONS/EFFECTS LIVE HERE

  // RETURN LIVES HERE
  return (
    <Box>
      <>
        <DataProvider>
          <UserProvider username={"JM"}>
            <HeaderNavbar />
            <Container
              sx={{
                display: "flex",
                height: "90vh",
              }}
            >
              <HomeAppRoutes />
            </Container>
          </UserProvider>
        </DataProvider>
      </>
    </Box>
  );
};

export default HomeApp;
