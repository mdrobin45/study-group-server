const express = require("express");
const getAssignments = require("../controllers/assignments/getAssignments");
const getUserAssignments = require("../controllers/assignments/getUserAssignments");
const getSingleAssignment = require("../controllers/assignments/getSingleAssignment");
const addSingleAssignment = require("../controllers/assignments/addSingleAssignment");
const deleteAssignment = require("../controllers/assignments/deleteAssignment");
const updateAssignment = require("../controllers/assignments/updateAssignment");
const assignmentRouter = express.Router();

// Get assignments by user email
assignmentRouter.get("/user", getUserAssignments);

// Get assignment by id
assignmentRouter.get("/:id", getSingleAssignment);

// Get all assignments
assignmentRouter.get("/", getAssignments);

// Add single assignment
assignmentRouter.post("/", addSingleAssignment);

// Delete single assignment
assignmentRouter.delete("/:id", deleteAssignment);

// Update assignment
assignmentRouter.put("/:id", updateAssignment);

// Export router
module.exports = assignmentRouter;
