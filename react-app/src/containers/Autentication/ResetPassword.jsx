import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputComponent from "../../components/InputField";
import resetPasswordvalidate from "../../components/ResetPasswordValidation";

import MTLogo from "../../assets/images/MT-logo.jpg";

const RegistrationSuccesful = () => {
  // VARIABLES/STATE LIVE HERE
  const [user, setUser] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  // FUNCTIONS/EFFECTS LIVE HERE
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });

    // Validate the user object and update errors
    const validation = resetPasswordvalidate({ ...user, [name]: value });
    setErrors(validation.errors);
  };

  const updatePassword = async () => {
    const email = user.email;
    const newPassword = user.password;
    const newConfirmPassword = user.confirmPassword;

    try {
      const response = await fetch(
        `http://localhost:3008/users/UpdatePassword`,
        {
          method: "Put",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            newPassword,
            newConfirmPassword,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(
          "Reset Password failed. Please check your information."
        );
      }

      const json = await response.json();
      console.log("User data:", json);
      console.log("Updated Password succesfully");

      navigate("/UpdatedPasswordSuccesful");
    } catch (error) {
      console.error(error.message);
    }
  };

  // RETURN LIVES HERE
  return (
    <Box>
      <img src={MTLogo} alt="MT Logo" />
      <Typography>Reset your password</Typography>
      <div>
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
      </div>

      <div>
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
        {errors.password && (
          <Typography color="error">{errors.password}</Typography>
        )}

        <InputComponent
          inputProp={{
            name: "confirmPassword",
            field: "confirmPassword",
            type: "password",
            value: user.confirmPassword,
            onChange: handleInputChange,
            placeholder: "Confirm password",
          }}
        />
        {errors.confirmPassword && (
          <Typography color="error">{errors.confirmPassword}</Typography>
        )}
      </div>

      <Button
        disabled={Object.keys(errors).length > 0}
        onClick={updatePassword}
      >
        Update Password
      </Button>
    </Box>
  );
};

export default RegistrationSuccesful;
