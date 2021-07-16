require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");

const port = 8000;

//DB Connection
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.log(err));

//Routes
app.get("/", (req, res) => {
  res.send("Welcome to LWR-WebApp!");
});

app.listen(port, () => {
  console.log(`App Listening at http://localhost:${port}`);
});
