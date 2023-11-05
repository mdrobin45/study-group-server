const mongoose = require("mongoose");

const submittedAssignmentSchema = mongoose.Schema({
   userEmail: { type: String },
   userName: { type: String },
   pdfLink: { type: String },
   note: { type: String },
   obtainedMarks: { type: String },
   feedback: { type: String },
   status: { type: String },
   assignment: {
      type: mongoose.Types.ObjectId,
      ref: "Assignments",
   },
});

module.exports = submittedAssignmentSchema;
