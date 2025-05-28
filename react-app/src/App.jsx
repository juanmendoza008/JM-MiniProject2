import { Container } from "@mui/material";
import "./App.css";
import AppRoutes from "./AppRoutes";

function App() {
  // VARIABLES/STATE

  // FUNCTIONS/SIDE EFFECT

  // RETURN OF OUR VISUAL STUFF
  return (
    <>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "300vh",
          justifyContent: "flex-start", // Ensures content is aligned to the top
          alignItems: "stretch", // Ensures content spans the full width of the container
        }}
      >
        <AppRoutes />
      </Container>
    </>
  );
}

export default App;
