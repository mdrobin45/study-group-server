const { SubmittedAssignmentModel } = require("../../models/models");

const getAllSubmittedAssignment = async (req, res) => {
   try {
      const result = await SubmittedAssignmentModel.find({}).populate(
         "assignment"
      );
      res.send(result);
   } catch {
      res.status(500).json({ message: "There was an server error" });
   }
};

module.exports = getAllSubmittedAssignment;
