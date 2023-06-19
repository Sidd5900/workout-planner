const express = require("express");
const router = express.Router();
const Workout = require("../models/workoutModel");
const {
  getWorkouts,
  getWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutControllers");
const requireAuth = require("../middleware/requireAuth");

// require auth for all workout routes
// if the user is not authenticated, we return an error message and hence the other routes are protected
router.use(requireAuth);

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
