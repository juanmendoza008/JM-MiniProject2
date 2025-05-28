import { Box, Typography, Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";
import InputComponent from "../../components/InputField";
import MTLogo from "../../assets/images/MT-logo.jpg";

const LoginPage = () => {
  // VARIABLES/STATE LIVE HERE
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  // FUNCTIONS/EFFECTS LIVE HERE
  const login = async () => {
    const email = user.email;
    const password = user.password;

    if (!email || !password) {
      console.error("Email and password are required.");
      return;
    }

    try {
      const response = await fetch(`http://localhost:3008/users/login`, {
        method: "Post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Login failed. Please check your email and password.");
      }

      const json = await response.json();
      console.log("User data:", json);
      console.log("Login successful");

      navigate("/HomeBase");
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const enableButton = user.email.length > 0 && user.password.length > 0;

  // RETURN LIVES HERE
  return (
    <Box>
      <Box>
        <Typography>Login Page </Typography>

        <img src={MTLogo} alt="MT Logo" />

        <InputComponent
          inputProp={{
            name: "email",
            field: "email",
            type: "email",
            value: user.email,
            onChange: handleInputChange,
            placeholder: "Enter Email Address",
          }}
        />

        <InputComponent
          inputProp={{
            name: "password",
            field: "password",
            type: "password",
            value: user.password,
            onChange: handleInputChange,
            placeholder: "Enter password",
          }}
        />

        <Typography>
          Forget Password <a href="./ResetPassword">Reset password</a>
        </Typography>

        <Button disabled={!enableButton} onClick={login}>
          {" "}
          Login
        </Button>
      </Box>

      <Box>
        <Typography>
          Don't have an account <a href="./SingUp">SingUp</a>
        </Typography>
      </Box>
    </Box>
  );
};

export default LoginPage;
