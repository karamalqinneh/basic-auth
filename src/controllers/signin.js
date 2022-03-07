// const db = require("../models/index");
// const base64 = require("base-64");
// const bcrypt = require("bcrypt");

async function signinHandler(req, res) {
  res.status(200).json({ username: req.validUsername });
}

module.exports = signinHandler;
