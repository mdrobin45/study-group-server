const express = require("express");
const tokenGenerate = require("../controllers/token/tokenGenerate");
const logOut = require("../controllers/token/logOut");
const rootRoute = express.Router();

// Application root
rootRoute.get("/", (req, res) => {
   res.send("Server running");
});

// JWT token generate
rootRoute.post("/token", tokenGenerate);

// Clear token from cookie
rootRoute.post("/logout", logOut);

// Export routes
module.exports = rootRoute;
