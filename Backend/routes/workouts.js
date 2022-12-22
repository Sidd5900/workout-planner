const express = require("express");
const router = express.Router();
const Workout = require("../models/workoutModel");
const {
  getWorkouts,
  getWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../Controllers/WorkoutControllers");

// GET all workouts
router.get("/", getWorkouts);

// GET a single workout
router.get("/:id", getWorkout);

// POST a new workout
router.post("/", createWorkout);

// DELETE a workout
router.delete("/:id", deleteWorkout);

// UPDATE a workout
// router.patch("/:id", (req, res) => {
//   res.json({ mssg: "UPDATE a workout" });
// });
router.patch("/:id", updateWorkout);

module.exports = router;
