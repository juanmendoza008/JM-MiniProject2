import { Typography } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import PageNotFound from "./containers/Autentication/PageNotFound";
import HomeApp from "./HomeApp";
import Transactions from "./containers/IntheApp/Transactions";
import ExcRate from "./containers/IntheApp/ExcRate";
import HomeBase from "./containers/IntheApp/HomeBase";

function HomeAppRoutes(props) {
  return (
    <Routes>
      {/* index matches on default/home URL: / */}
      {/* HomeApp */}
      <Route path="/Home" element={<HomeApp />} />

      <Route path="/HomeBase" element={<HomeBase />} />

      <Route path="/Transactions" element={<Transactions />} />
      <Route path="/ExcRate" element={<ExcRate />} />

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default HomeAppRoutes;
