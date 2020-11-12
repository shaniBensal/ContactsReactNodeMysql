const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
var corsOptions = {
  origin: "http://localhost:5000",
};
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const db = require("./models");
db.sequelize.sync();
const port = 5000;
require("./routes/user.routes")(app);
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
//connect
// db.connect((err) => {
//   if (err) {
//     throw err;
//   }
//   console.log("MySql Connected");
// });

//create db
// app.get("/createdb", (req, res) => {
//   let sql = "CREATE DATABASE IF NOT EXISTS react_MySql";
//   db.query(sql, (err, res) => {
//     if (err) throw err;
//     res.send("database created");
//   });
// });

// //create table
// app.get("/createcontacttable", (req, res) => {
//   let sql =
//     "CREATE TABLE contacts(id INT AUTO_INCREMENT PRIMARY KEY, firstName VARCHAR(50), lastName VARCHAR(50), phone VARCHAR(50), email VARCHAR(50), photo VARCHAR(500))";
//   db.query(sql, (err, res) => {
//     if (err) throw err;
//     res.send("table created");
//   });
// });

// app.get("/insertcontacts", (req, res) => {
//   var values = "";
//   let users = defaultUsers.defaultUsers;
//   for (var i = 0; i < users.length; i++) {
//     values +=
//       users[i].id +
//       "," +
//       users[i].firstName +
//       "," +
//       users[i].lastName +
//       "," +
//       users[i].phone +
//       "," +
//       users[i].email +
//       "," +
//       users[i].photo;
//   }
//   console.log("values", values);
//   var sql = db.format(
//     "INSERT into contacts(id, firstName, lastName, phone, email, photo) VALUES (?)",
//     values
//   );
//   console.log(sql);
//   db.query(sql, values, (err, res) => {
//     if (err) throw err;
//     console.log(res);
//     res.send("all the contacts inserted the table");
//   });
// });

// //get all contacts
// app.get("/getcontacts", (req, res) => {
//   let sql = "SELECT * FROM contacts";
//   db.query(sql, (err, res) => {
//     if (err) throw err;
//     console.log(res);
//     res.send("all the contacts");
//   });
// });

// //get single contact
// app.get("/getcontact/:id", (req, res) => {
//   let sql = `SELECT * FROM contacts WHERE id = ${req.params.id}`;
//   db.query(sql, (err, res) => {
//     if (err) throw err;
//     console.log(res);
//     res.send("get single contact");
//   });
// });

// //update contact firstName
// app.get("/updatecontact/:id", (req, res) => {
//   let newContact = "Update First Name";
//   let sql = `UPDATE contacts SET firstName='${newContact}'' WHERE id = ${req.params.id}`;
//   db.query(sql, (err, res) => {
//     if (err) throw err;
//     console.log(res);
//     res.send("update single contact");
//   });
// });

// //Delete contact firstName
// app.get("/deletecontact/:id", (req, res) => {
//   let sql = `DELETE FROM contacts WHERE id = ${req.params.id}`;
//   db.query(sql, (err, res) => {
//     if (err) throw err;
//     console.log(res);
//     res.send("delete single contact");
//   });
// });


