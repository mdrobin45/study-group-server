const mongoose = require("mongoose");

const assignmentSchema = mongoose.Schema({
   title: {
      type: String,
   },
   description: {
      type: String,
   },
   thumbnail: {
      type: String,
   },
   totalMarks: {
      type: String,
   },
   difficultyLevel: {
      type: String,
   },
   dueDate: {
      type: String,
   },
   userEmail: {
      type: String,
   },
});

module.exports = assignmentSchema;
