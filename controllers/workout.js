const Workout = require("../models/Workout");

const createWorkout = async (req, res) => {
  req.body.createdBy = req.user.userId;
  const workout = await Workout.create(req.body);
  res.status(201).json({ msg: "Workout created successfully", workout, userID : req.user.userId });
};

const getAllWorkouts = async (req, res) => {
  const workouts = await Workout.find({ createdBy: req.user.userId }).sort(
    "createdAt",
  );
  res.status(200).json({ workouts, count: workouts.length });
};

const getWorkout = async (req, res) => {
  const { id: workoutId } = req.params;
  const workout = await Workout.findOne({
    _id: workoutId,
    createdBy: req.user.userId,
  });
  if (!workout) {
    return res.status(404).json({ msg: "Workout not found" });
  }
  res.status(200).json({ workout });
};

const updateWorkout = async (req, res) => {
  const { id: workoutId } = req.params;
  const workout = await Workout.findOneAndUpdate(
    { _id: workoutId, createdBy: req.user.userId },
    req.body,
    { new: true, runValidators: true },
  );

  if (!workout) {
    return res.status(404).json({ msg: "Workout not found" });
  }

  res.status(200).json({ msg: "Workout updated successfully", workout });
};

const deleteWorkout = async (req, res) => {
  const { id: workoutId } = req.params;
  const workout = await Workout.findOneAndDelete({
    _id: workoutId,
    createdBy: req.user.userId,
  });
  if (!workout) {
    return res.status(404).json({ msg: "Workout not found" });
  }
  res.status(200).json({ msg: "Workout deleted successfully" });
};

const listWorkouts = async (req, res) => {
  const workouts = await Workout.find({ createdBy: req.user.userId }).sort({
    scheduledFor: 1,
  });
  res.status(200).json({ workouts, count: workouts.length });
};

const generateReport = async (req, res) => {
  const workouts = await Workout.find({ createdBy: req.user.userId });
  const totalWorkouts = workouts.length;
  const completed = workouts.filter((w) => w.status === "completed").length;
  const pending = workouts.filter((w) => w.status === "pending").length;
  const missed = workouts.filter((w) => w.status === "missed").length;
  
  res.status(200).json({
    totalWorkouts : totalWorkouts,
    completed : completed,
    pending : pending,
    missed : missed,
  });
};

module.exports = {
  createWorkout,
  getAllWorkouts,
  getWorkout,
  updateWorkout,
  deleteWorkout,
  listWorkouts,
  generateReport,
};
