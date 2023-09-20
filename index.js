//IMPORT CORE MODULES
const express = require("express");
const app = express();
const path = require("path");
const sqlite3 = require("sqlite3").verbose();
const expressLayout = require("express-ejs-layouts");

//CONFIGURE PORT NUMBER
const port = 3000;

//CONFIGURE PUBLIC FOLDER: STORES CSS, JS, IMAGE ASSETS
app.use(express.static(path.join(__dirname, "public")));

//ENABLE PARSING OF FORMS IN EXPRESS
app.use(express.urlencoded({ extended: false }));

//CONFIGURE TEMPLATING AND VIEW ENGINE
app.use(expressLayout);

// USE `./views/layout/main.ejs` AS MAIN TEMPLATE LAYOUT FILE
app.set("layout", "./layouts/main");

// USE `ejs` AS VIEW ENGINE
app.set("view engine", "ejs");

// CONFIGURE AND MOUNT READER ROUTER
const readerRoute = require("./routes/reader");
app.use("/reader", readerRoute);

// CONFIGURE AND MOUNT AUTHOR ROUTER
const authorRoute = require("./routes/author");
app.use("/author", authorRoute);

//items in the global namespace are accessible throught out the node application
global.db = new sqlite3.Database("./database.db", function (err) {
  if (err) {
    console.error(err);
    process.exit(1); //Bail out we can't connect to the DB
  } else {
    console.log("Database connected");
    global.db.run("PRAGMA foreign_keys=ON"); //This tells SQLite to pay attention to foreign key constraints
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
