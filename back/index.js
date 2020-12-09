const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = __dirname + '/views/';

const app = express();
app.use(express.static(path));


var corsOptions = {
  origin: "http://localhost:5000"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./models");

db.sequelize.sync();
app.get('/', function (req,res) {
  res.sendFile(path + "index.html");
});

require("./routes/user.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});