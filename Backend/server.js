const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const workoutRoutes = require("./routes/workouts");

//express app
const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/workouts", workoutRoutes);

// connect to the database
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("connected to database");
    app.listen(process.env.PORT, () =>
      console.log("Server is listening on port", process.env.PORT)
    );
  })
  .catch((err) => console.log(err));
