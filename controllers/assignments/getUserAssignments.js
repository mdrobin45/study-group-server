const { AssignmentModel } = require("../../models/models");

const getUserAssignments = async (req, res) => {
   try {
      const { email } = req.query;
      const result = await AssignmentModel.find({ userEmail: email });
      res.send(result);
   } catch {
      res.status(500).json({ message: "There was an server error" });
   }
};

module.exports = getUserAssignments;
