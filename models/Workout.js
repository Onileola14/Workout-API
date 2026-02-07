const mongoose = require("mongoose");
const ExerciseSchema = require('./Exercise')
const WorkoutSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    exercises: [ExerciseSchema],

    scheduledFor: {
      type: Date,
      required: true,
    },

    status: {
      type: String,
      enum: ["pending", "completed", "missed"],
      default: "pending",
    },

    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },

    comments: {
      type: String,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Workout", WorkoutSchema);