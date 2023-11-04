const { model } = require("mongoose");
const assignmentSchema = require("../schemas/assignmentSchema");

// Initialize models
const AssignmentModel = model("assignments", assignmentSchema);

// Export models
module.exports = { AssignmentModel };
