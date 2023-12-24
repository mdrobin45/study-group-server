const express = require("express");
const tokenGenerate = require("../controllers/token/tokenGenerate");
const logOut = require("../controllers/token/logOut");
const upload = require("../utils/upload");
const rootRoute = express.Router();

// Application root
rootRoute.get("/", (req, res) => {
   res.send("Server running");
});

// JWT token generate
rootRoute.post("/token", tokenGenerate);

// Clear token from cookie
rootRoute.post("/logout", logOut);

// Upload profile photo
rootRoute.post("/upload", upload.single("profilePhoto"), (req, res) => {
   res.json("Image uploaded");
});

// Export routes
module.exports = rootRoute;
