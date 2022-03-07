const db = require("../models/index");
const bcrypt = require("bcrypt");

async function signupHandler(req, res) {
  let password = await bcrypt.hash(req.body.password, 5);
  console.log(password);
  let newUser = {
    username: req.body.username,
    password,
  };
  let user = await db.User.create(newUser);
  res.status(201).json(user);
}

module.exports = signupHandler;
