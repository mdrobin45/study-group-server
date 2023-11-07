const express = require("express");
const getAssignments = require("../controllers/assignments/getAssignments");
const getUserAssignments = require("../controllers/assignments/getUserAssignments");
const getSingleAssignment = require("../controllers/assignments/getSingleAssignment");
const addSingleAssignment = require("../controllers/assignments/addSingleAssignment");
const deleteAssignment = require("../controllers/assignments/deleteAssignment");
const updateAssignment = require("../controllers/assignments/updateAssignment");
const verifyUser = require("../middlewares/verifyUser");
const assignmentRoute = express.Router();

// Get assignments by user email
assignmentRoute.get("/user", verifyUser, getUserAssignments);

// Get assignment by id
assignmentRoute.get("/:id", verifyUser, getSingleAssignment);

// Get all assignments
assignmentRoute.get("/", getAssignments);

// Add single assignment
assignmentRoute.post("/", verifyUser, addSingleAssignment);

// Delete single assignment
assignmentRoute.delete("/:id", verifyUser, deleteAssignment);

// Update assignment
assignmentRoute.put("/:id", verifyUser, updateAssignment);

// Export router
module.exports = assignmentRoute;
