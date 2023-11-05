const express = require("express");
const getAssignments = require("../controllers/assignments/getAssignments");
const getUserAssignments = require("../controllers/assignments/getUserAssignments");
const getSingleAssignment = require("../controllers/assignments/getSingleAssignment");
const addSingleAssignment = require("../controllers/assignments/addSingleAssignment");
const deleteAssignment = require("../controllers/assignments/deleteAssignment");
const updateAssignment = require("../controllers/assignments/updateAssignment");
const assignmentRoute = express.Router();

// Get assignments by user email
assignmentRoute.get("/user", getUserAssignments);

// Get assignment by id
assignmentRoute.get("/:id", getSingleAssignment);

// Get all assignments
assignmentRoute.get("/", getAssignments);

// Add single assignment
assignmentRoute.post("/", addSingleAssignment);

// Delete single assignment
assignmentRoute.delete("/:id", deleteAssignment);

// Update assignment
assignmentRoute.put("/:id", updateAssignment);

// Export router
module.exports = assignmentRoute;
