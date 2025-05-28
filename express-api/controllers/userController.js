const users = require("../models/users.js");

// Find Users LoginPage //Post
const loginMatch = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Missing data" });
  }

  let matchUser = users.find(
    (user) => user.email === email && user.password === password
  );

  if (matchUser) {
    return res.status(200).json(matchUser);
  } else {
    return res
      .status(401)
      .json({ error: "No matching user, Check User or password" });
  }
};

// Create a New Users SingUp Page //Post
const createUser = (req, res) => {
  let newUser = req.body;
  console.log(newUser);

  if (
    !newUser.firstName ||
    !newUser.lastName ||
    !newUser.email ||
    !newUser.password ||
    !newUser.confirmPassword
  ) {
    res.status(500).json({ error: "User must contain all parameters" });
  } else if (!newUser.id) {
    newUser.id = users.length + 1;
  }

  users.push(newUser);
  console.log(users);
  res.status(200).json(newUser);
};

// Update Password //Put
const updatedPassword = (req, res) => {
  const { email, newPassword, newConfirmPassword } = req.body;

  if (!email || !newPassword || !newConfirmPassword) {
    return res.status(400).json({ error: "Missing data" });
  }

  let user = users.find((user) => user.email == email);

  if (user) {
    user.password = newPassword;
    user.confirmPassword = newConfirmPassword;
    return res.status(200).json({ message: "Password updated" });
  }
  return res.status(404).json({ result: "User not found" });
};

module.exports = {
  loginMatch,
  createUser,
  updatedPassword,
};
