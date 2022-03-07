const express = require("express");
const notFoundHandler = require("./error-handlers/404");
const errorHandler = require("./error-handlers/500");
const homeHandler = require("./controllers/home");
const authRoute = require("./routes/auth");

// express app
const app = express();

// connect to sequelize & listen for requests
const start = (port) => {
  app.listen(port, () => console.log(`Running on Port ${port}`));
};

// register view engine
app.set("view engine", "ejs");

// middleware & static files
app.use(express.json());
app.use(express.static("../public"));

app.get("/", homeHandler);
app.use(authRoute);

app.use("*", notFoundHandler);
app.use(errorHandler);

module.exports = {
  app: app,
  start: start,
};
