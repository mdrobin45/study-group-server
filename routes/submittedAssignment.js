const express = require("express");
const submitAssignment = require("../controllers/submittedAssignment/submitAssignment");
const getAllSubmittedAssignment = require("../controllers/submittedAssignment/getAllSubmittedAssignment");
const getUserSubmittedAssignments = require("../controllers/submittedAssignment/getUserSubmittedAssignment");
const getSingleSubmittedAssignment = require("../controllers/submittedAssignment/getSingleSubmittedAssignment");
const updateSubmittedAssignment = require("../controllers/submittedAssignment/updateSubmittedAssignment");
const verifyUser = require("../middlewares/verifyUser");
const submittedAssignmentRoute = express.Router();

// Get submitted assignment by user
submittedAssignmentRoute.get("/user", verifyUser, getUserSubmittedAssignments);

// Get single submitted assignment
submittedAssignmentRoute.get("/:id", verifyUser, getSingleSubmittedAssignment);

// Get all submitted assignment
submittedAssignmentRoute.get("/", verifyUser, getAllSubmittedAssignment);

// Submit single assignment
submittedAssignmentRoute.post("/", verifyUser, submitAssignment);

// Update assignment status assignment
submittedAssignmentRoute.put("/:id", verifyUser, updateSubmittedAssignment);

// Export router
module.exports = submittedAssignmentRoute;
