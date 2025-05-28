import { Box, Typography, Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputComponent from "../../components/InputField";
import validateUser from "../../components/SingUpValidation";

const SingUpPage = () => {
  // VARIABLES/STATE LIVE HERE
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
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
    const validation = validateUser({ ...user, [name]: value });
    setErrors(validation.errors);
  };

  const singUp = async () => {
    const firstName = user.firstName;
    const lastName = user.lastName;
    const email = user.email;
    const password = user.password;
    const confirmPassword = user.confirmPassword;

    try {
      const response = await fetch(`http://localhost:3008/users/SingUp`, {
        method: "Post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password,
          confirmPassword,
        }),
      });

      if (!response.ok) {
        throw new Error("SingUp failed. Please check your information.");
      }

      const json = await response.json();
      console.log("User data:", json);
      console.log("SingUp succesfull");

      navigate("/RegistrationSuccesful");
    } catch (error) {
      console.error(error.message);
    }
  };

  // RETURN LIVES HERE
  return (
    <Box>
      <Typography>SingUp Page </Typography>

      <div>
        <InputComponent
          inputProp={{
            name: "firstName",
            field: "firstName",
            type: "text",
            value: user.firstName,
            onChange: handleInputChange,
            placeholder: "firstName",
          }}
        />
        {errors.firstName && (
          <Typography color="error">{errors.firstName} </Typography>
        )}

        <InputComponent
          inputProp={{
            name: "lastName",
            field: "lastName",
            type: "text",
            value: user.lastName,
            onChange: handleInputChange,
            placeholder: "lastName",
          }}
        />
        {errors.lastName && (
          <Typography color="error">{errors.lastName} </Typography>
        )}
      </div>

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
      {errors.email && <Typography color="error">{errors.email}</Typography>}

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

      <Button disabled={Object.keys(errors).length > 0} onClick={singUp}>
        Sign Up
      </Button>
    </Box>
  );
};

export default SingUpPage;
