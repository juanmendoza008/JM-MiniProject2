const express = require("express");

const account = require("../models/Account");
const accountController = require("../controllers/AccountController");

const router = express.Router();

// Default. Get Accounts
router.get("/", (req, res) => {
  res.json(account);
});

// Find Account
router.post("/findAccount", (req, res) => {
  accountController.findAccount(req, res);
});

// Create a new Account
router.post("/createCurrency", (req, res) => {
  accountController.createCurrency(req, res);
});

// Exchange Money between Account
router.put("/exchangeCurrency", (req, res) => {
  accountController.exchangeCurrency(req, res);
});

// Add Money Deposit
router.put("/addMoney", (req, res) => {
  accountController.addMoney(req, res);
});

// Send Money Withdrawal
router.put("/sendMoney", (req, res) => {
  accountController.sendMoney(req, res);
});
module.exports = router;
