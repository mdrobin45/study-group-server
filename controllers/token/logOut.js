const logOut = async (req, res) => {
   try {
      res.clearCookie("authToken", {
         path: "/",
         domain: "assignment-11-robin45r.netlify.app",
         maxAge: 1,
      });
      res.end();
   } catch {
      res.status(500).json({ message: "There was an server error" });
   }
};
module.exports = logOut;
