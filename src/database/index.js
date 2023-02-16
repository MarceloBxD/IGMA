const mysql = require("mysql");
require("dotenv").config();

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: process.env.PASSWORD_DB,
  database: "igma",
});

module.exports = db;
