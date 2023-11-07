const logOut = async (req, res) => {
   try {
      res.clearCookie("authToken", {
         path: "/",
         domain: "localhost",
      });
      res.end();
   } catch {
      res.status(500).json({ message: "There was an server error" });
   }
};
module.exports = logOut;
