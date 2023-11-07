const jwt = require("jsonwebtoken");

const tokenGenerate = async (req, res) => {
   try {
      const data = req.body;

      // Generate jwt and save to client cookie
      const token = jwt.sign(data, process.env.JWT_SECRET, {
         expiresIn: "1h",
      });

      // Set token in cookie
      res.cookie("authToken", token, { maxAge: 3600000, httpOnly: true });
      res.end();
   } catch {
      res.status(500).json({ message: "There was an server error" });
   }
};

module.exports = tokenGenerate;
