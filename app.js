const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");
const database = require("./database");
const assignmentRouter = require("./routes/assignment");
require("dotenv").config();

// Use middleware
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use(express.json());

// Database connection
database();

// application router
app.use("/assignments", assignmentRouter);

// Listen server
app.listen(port, () => {
   console.log(`Server is running in ${port}`);
});
