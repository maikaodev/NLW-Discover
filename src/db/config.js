const sqlite3 = require("sqlite3");
const { open } = require("sqlite");
const path = require("path");

module.exports = () =>
  open({
    filename: path.join(__dirname, "rocketq.sqlite"),
    driver: sqlite3.Database,
  });
