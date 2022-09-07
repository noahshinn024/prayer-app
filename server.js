const express = require("express");
const mongoose = require("mongoose");
require("dotenv/config");

const DB = process.env.mongoURI;

// routes
const journalsRoute = require("./routes/api/journals");
// const authRoute = require("./routes/auth");
const streakRoute = require("./routes/api/streak");

const app = express();

app.use(express.json());

mongoose
  .connect(DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

// app.use("/api/user", authRoute);
app.use("/api/journals", journalsRoute);
app.use("/api/streak", streakRoute);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
