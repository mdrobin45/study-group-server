const { SubmittedAssignmentModel } = require("../../models/models");

const getUserSubmittedAssignments = async (req, res) => {
   try {
      const { email } = req.query;
      const result = await SubmittedAssignmentModel.find({
         examineeEmail: email,
      }).populate("assignment");
      res.send(result);
   } catch {
      res.status(500).json({ message: "There was an server error" });
   }
};

module.exports = getUserSubmittedAssignments;
