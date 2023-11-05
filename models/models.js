const { model } = require("mongoose");
const assignmentSchema = require("../schemas/assignmentSchema");
const submittedAssignmentSchema = require("../schemas/submittedAssignment");

// Initialize models
const AssignmentModel = model("Assignments", assignmentSchema);
const SubmittedAssignmentModel = model(
   "SubmittedAssignment",
   submittedAssignmentSchema
);

// Export models
module.exports = { AssignmentModel, SubmittedAssignmentModel };
