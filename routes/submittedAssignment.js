const express = require("express");
const submitAssignment = require("../controllers/submittedAssignment/submitAssignment");
const getAllSubmittedAssignment = require("../controllers/submittedAssignment/getAllSubmittedAssignment");
const getUserSubmittedAssignments = require("../controllers/submittedAssignment/getUserSubmittedAssignment");
const getSingleSubmittedAssignment = require("../controllers/submittedAssignment/getSingleSubmittedAssignment");
const updateSubmittedAssignment = require("../controllers/submittedAssignment/updateSubmittedAssignment");
const submittedAssignmentRoute = express.Router();

// Get submitted assignment by user
submittedAssignmentRoute.get("/user", getUserSubmittedAssignments);

// Get single submitted assignment
submittedAssignmentRoute.get("/:id", getSingleSubmittedAssignment);

// Get all submitted assignment
submittedAssignmentRoute.get("/", getAllSubmittedAssignment);

// Submit single assignment
submittedAssignmentRoute.post("/", submitAssignment);

// Update assignment status assignment
submittedAssignmentRoute.put("/:id", updateSubmittedAssignment);

// Export router
module.exports = submittedAssignmentRoute;
