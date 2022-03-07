const server = require("./src/server");
require("dotenv").config();
const db = require("./src/models/index");

db.sequelize.sync().then(() => {
  server.start(process.env.PORT || 5050);
});
