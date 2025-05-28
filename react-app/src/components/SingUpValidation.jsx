// NAME OF COMPONENT IS A ARROW FUNCTION

const validateUser = (user) => {
  // VARIABLES/STATE LIVE HERE
  const errors = {};
  let hasErrors = false;

  // FUNCTIONS/EFFECTS LIVE HERE
  const addError = (field, message) => {
    errors[field] = message;
    hasErrors = true;
  };

  if (!user.firstName) {
    addError("firstName", "Firstname is required");
  }
  if (!user.lastName) {
    addError("lastName", "Lastname is required");
  }
  if (!user.email) {
    addError("email", "Email is required");
  }
  if (!user.password) {
    addError("password", "Password is required");
  } else if (user.password.length < 8) {
    addError("password", "Password must be at lest 8 characters");
  }
  if (user.password !== user.confirmPassword) {
    addError("confirmPassword", "Confirm Password must be equal to password");
  }

  // RETURN LIVES HERE
  return { errors, hasErrors };
};

export default validateUser;
