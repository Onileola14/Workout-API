const mongoose = require('mongoose')

const ExerciseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  sets: {
    type: Number,
    required: true,

  },
  reps: {
    type: Number,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  comment: {
    type: String,
  },
});

module.exports = ExerciseSchema
