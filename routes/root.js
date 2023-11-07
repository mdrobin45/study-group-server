const express = require("express");
const tokenGenerate = require("../controllers/token/tokenGenerate");
const rootRoute = express.Router();

// Application root
rootRoute.get("/", (req, res) => {
   res.send("Server running");
});

// JWT token generate
rootRoute.post("/token", tokenGenerate);

// Export routes
module.exports = rootRoute;
