const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require("./src/controllers/authController")(app);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
