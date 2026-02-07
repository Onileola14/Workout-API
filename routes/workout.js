const express = require("express");
const authentication = require("../middlewares/authentication");
const router = express.Router();

const {
  createWorkout,
  getAllWorkouts,
  getWorkout,
  updateWorkout,
  deleteWorkout,
  listWorkouts,
  generateReport,
} = require("../controllers/workout");

router.route("/").get(getAllWorkouts).post(createWorkout);
router.route("/:id").get(getWorkout).patch(updateWorkout).delete(deleteWorkout);

router.route("/workoutlist/v1").get(listWorkouts);
router.route("/report/v1").get(generateReport);

module.exports = router;
