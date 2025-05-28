// NAME OF COMPONENT IS A ARROW FUNCTION

const resetPasswordvalidate = (user) => {
  // VARIABLES/STATE LIVE HERE
  const errors = {};
  let hasErrors = false;

  // FUNCTIONS/EFFECTS LIVE HERE
  const addError = (field, message) => {
    errors[field] = message;
    hasErrors = true;
  };

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

export default resetPasswordvalidate;
