const errorHandler = require("../error-handlers/500");

const db = require("../models/index");
const base64 = require("base-64");
const bcrypt = require("bcrypt");

async function authLogic(req, res, next) {
  if (req.headers["authorization"]) {
    let basicHeaderParts = req.headers.authorization.split(" ");
    let encodedPart = basicHeaderParts.pop();
    let decoded = base64.decode(encodedPart);
    let [username, password] = decoded.split(":");

    const user = await db.User.findOne({ where: { username: username } });
    const valid = await bcrypt.compare(password, user.password);
    if (valid) {
      req.validUsername = username;
      next();
    } else {
      res.status(500).render("invalidLogin");
    }
  }
  next(errorHandler);
}

module.exports = authLogic;
