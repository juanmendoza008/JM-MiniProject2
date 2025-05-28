const express = require("express");

const users = require("../models/users");
const userController = require("../controllers/userController");

const router = express.Router();

// Default. Get users //Ok work
router.get("/", (req, res) => {
  res.json(users);
});

// LoginPage. Find if user exits //Ok work
router.post("/login", (req, res) => {
  userController.loginMatch(req, res);
});

// Create User. SingUp
router.post("/SingUp", (req, res) => {
  userController.createUser(req, res);
});

// Update Password from User. Reset Password
router.put("/UpdatePassword", (req, res) => {
  userController.updatedPassword(req, res);
});

module.exports = router;
