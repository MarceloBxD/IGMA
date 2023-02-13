const mysql = require("mysql");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Br@cet051528",
  database: "igma",
});

module.exports = db;
