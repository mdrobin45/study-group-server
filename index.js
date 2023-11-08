const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");
const database = require("./database");
const assignmentRoute = require("./routes/assignment");
const submittedAssignmentRoute = require("./routes/submittedAssignment");
const rootRoute = require("./routes/root");
const cookieParser = require("cookie-parser");
require("dotenv").config();

// Use middleware
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use(cookieParser());
app.use(express.json());

// Database connection
database();

// application routes
app.use("/", rootRoute);
app.use("/assignments", assignmentRoute);
app.use("/submittedAssignment", submittedAssignmentRoute);

// Listen server
app.listen(port, () => {
   console.log(`Server is running in ${port}`);
});
