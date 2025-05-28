import { Typography } from "@mui/material";
import { Routes, Route } from "react-router-dom";

import LoginPage from "./containers/Autentication/LoginPage";
import SingUpPage from "./containers/Autentication/SingUp";
import RegistrationSuccesful from "./containers/Autentication/RegistrationSuccesful";
import ResetPassword from "./containers/Autentication/ResetPassword";
import UpdatePasswordSuccesful from "./containers/Autentication/UpdatePasswordSuccesful";
import PageNotFound from "./containers/Autentication/PageNotFound";

import HomeApp from "./HomeApp";

function AppRoutes(props) {
  return (
    <Routes>
      {/* index matches on default/home URL: / */}
      {/* Login & Registration Process */}
      <Route index element={<LoginPage />} />
      <Route path="/SingUp" element={<SingUpPage />} />
      <Route
        path="/RegistrationSuccesful"
        element={<RegistrationSuccesful />}
      />

      <Route path="/ResetPassword" element={<ResetPassword />} />
      <Route
        path="/UpdatedPasswordSuccesful"
        element={<UpdatePasswordSuccesful />}
      />

      {/* Home & Application */}
      <Route path="/Home/*" element={<HomeApp />} />

      {/* special route to handle if none of the above match */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default AppRoutes;
