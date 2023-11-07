const jwt = require("jsonwebtoken");
const authUser = async (req, res, next) => {
   try {
      const { email } = req.query;
      const { authToken } = req.cookies;
      const decoded = await jwt.verify(authToken, process.env.JWT_SECRET);
      const { email: userEmail } = decoded;
      if (userEmail === email) {
         req.userEmail;
         next();
      } else {
         res.status(401).json({ message: "Authentication error" });
      }
   } catch (err) {
      res.status(401).json({ message: "Authentication error" });
   }
};

module.exports = authUser;
