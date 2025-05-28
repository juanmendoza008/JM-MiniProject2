const account = require("../models/Account.js");

// Find Account //Post
const findAccount = (req, res) => {
  const { currency } = req.body;

  if (!currency) {
    return res.status(400).json({ error: "Select a Currency" });
  }

  let findCurrency = account.find((acc) => acc.name === currency);

  if (findCurrency) {
    return res.status(200).json(findCurrency);
  } else {
    return res.status(401).json({ error: "No matching currency" });
  }
};

// Create a New Account //Post
const createCurrency = (req, res) => {
  let newCurrency = req.body;

  if (!newCurrency.name || !newCurrency.symbol || !newCurrency.value) {
    res.status(500).json({ error: "User must contain all parameters" });
  } else if (!newCurrency.amount || !newCurrency.imgSource) {
    newCurrency.amount = 0;
    newCurrency.imgSource = "";
  }

  account.push(newCurrency);
  console.log(account);
  res.status(200).json(newCurrency);
};

// Exchange between Account //Put
const exchangeCurrency = (req, res) => {
  const { currencyFrom, amountFrom, currencyTo, amountTo } = req.body;

  if (!currencyFrom || !currencyTo || !amountFrom || !amountTo) {
    return res.status(400).json({ error: "All parameters must contain" });
  }

  if (amountFrom <= 0 || amountTo <= 0) {
    return res.status(400).json({ error: "Amount must be greater than zero" });
  }

  let findCurrencyFrom = account.find((acc) => acc.name === currencyFrom);
  let findCurrencyTo = account.find((acc) => acc.name === currencyTo);

  if (findCurrencyFrom && findCurrencyTo) {
    if (findCurrencyFrom < amountFrom) {
      return res
        .status(400)
        .json({ error: "Insufficient funds in currency From" });
    }

    findCurrencyFrom.amount -= amountFrom;
    findCurrencyTo.amount += amountTo;
    console.log(account);
    return res.status(200).json({ message: "Exchange money updated" });
  }
  return res.status(404).json({ message: "Not matching currencies" });
};

// Add Money -- Deposit //Put
const addMoney = (req, res) => {
  const { currency, addMoney } = req.body;

  if (!currency) {
    return res.status(400).json({ error: "Select a Currency" });
  }

  let findCurrency = account.find((acc) => acc.name === currency);

  if (findCurrency) {
    findCurrency.amount += addMoney;
    console.log(account);
    return res.status(200).json({ message: "Deposit money updated" });
  }
  return res.status(404).json({ error: "No matching currency" });
};

// Send Money -- Withdrawal //Put
const sendMoney = (req, res) => {
  const { currency, sendMoney } = req.body;

  if (!currency) {
    return res.status(400).json({ error: "Select a Currency" });
  }

  let findCurrency = account.find((acc) => acc.name === currency);

  if (findCurrency) {
    findCurrency.amount -= sendMoney;
    console.log(account);
    return res.status(200).json({ message: "Witdrawal money updated" });
  }
  return res.status(404).json({ error: "No matching currency" });
};

module.exports = {
  findAccount,
  createCurrency,
  exchangeCurrency,
  addMoney,
  sendMoney,
};
