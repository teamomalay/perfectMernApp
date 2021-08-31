const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const mongoose = require("mongoose");
const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();
app.use(cookieParser());

require("./db/conn");

app.use(express.json());

// we link the router files to make our route easy
app.use(require("./router/auth"));

const PORT = process.env.PORT;

app.get("/signup", (req, res) => {
  res.send(`Hello Registration world from the server`);
});

app.listen(PORT, () => {
  console.log(`server is running at port no ${PORT}`);
});
