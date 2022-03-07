const express = require("express");
const notFoundHandler = require("./error-handlers/404");
const errorHandler = require("./error-handlers/500");
// express app
const app = express();

// connect to sequelize & listen for requests
const start = (port) => {
  app.listen(port, () => console.log(`Running on Port ${port}`));
};

// register view engine
app.set("view engine", "ejs");

// middleware & static files
app.use(express.static("../public"));

app.use("*", notFoundHandler);
app.use(errorHandler);

module.exports = {
  app: app,
  start: start,
};
